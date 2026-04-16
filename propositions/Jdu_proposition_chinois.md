# HerStory Arena —— 项目提案（21+ 分策略）

*基于 ft_transcendence subject v20.0 的项目提案草案。*

## 1. 项目总体介绍

**HerStory Arena** 是一个面向多用户的 Web 应用，核心主题是女性历史、集体记忆、社区互动与在线游戏。  
这个平台由四个彼此连贯的层次组成：

1. **HerStory 档案层**  
   一个“那年今日”式的时间档案系统，用来展示女性的成就、历史事件与关键时刻。

2. **社区层**  
   注册用户可以发布关于自己、身边的人，或者值得被看见的公共女性人物的成就条目，同时遵守平台规则和审核机制。

3. **社交互动层**  
   用户可以创建个人主页、添加好友、互发消息、接收通知，并围绕历史内容和社区发布进行互动。

4. **游戏层**  
   一个实时在线的女性主题集换式卡牌游戏，卡牌灵感来自女性历史人物、成就和行动领域。  
   用户可以收集卡牌、构建卡组、向好友发起挑战、参加比赛，并通过统计系统与 gamification 机制追踪自己的成长。（目前这个游戏还没有完全想好）

## 2. 产品愿景

这个产品连接的是**历史可见性、社区认可与策略性游戏**。

档案层提供编辑性身份。  
社区层提供真实的用户参与和用户生成内容。  
游戏系统提供竞争性、重复可玩性以及 sujet 中多个2分模块的入口。  
而 tournament、成长系统、通知可以进一步把这个游戏延展成一个完整生态。

## 3. MVP 与分阶段范围

### 第一阶段 —— mandatory 基础
- 前端 + 后端 + 数据库
- 安全注册 / 登录
- Docker 化部署
- HTTPS
- Privacy Policy
- Terms of Service
- 响应式界面，兼容 Chrome 最新稳定版
- 浏览器控制台无错误

### 第二阶段 —— 产品核心
- 用户主页
- 头像上传
- 好友系统
- 基础聊天
- “那年今日”档案系统
- 成就类社区发帖
- 评论或消息
- 通知
- 一个完整可运行的双人实时卡牌游戏
- 对局记录存储
- 历史战绩
- 排行榜页面

### 第三阶段 —— 向 21 分以上扩展
- 比赛系统
- 游戏自定义
- gamification 系统
- 多语言
- OAuth
- 高级搜索
- 文件管理系统
- 额外浏览器支持或 spectator mode

## 4. 技术架构提案

### 4.1 高层架构

```text
[浏览器 / Frontend]
        |
        | HTTPS + WebSocket
        v
[Reverse Proxy / TLS]
        |
        v
[Backend 应用]
   |         |          |           |
   |         |          |           |
   v         v          v           v
[Auth]  [Content/API] [Chat/Notif] [Game Gateway]
   |         |          |           |
   +---------+----------+-----------+
                     |
                     v
              [PostgreSQL DB]
                     |
                     v
             [文件存储层]
```

### 4.2 推荐技术栈

#### 前端
- **Next.js** 或 **React**
- Tailwind CSS
- 表单验证
- WebSocket 客户端
- 从一开始就为 i18n 做好文本结构设计

#### 后端
推荐方案：
- **NestJS**
- REST API + WebSocket gateway
- 模块化架构
- DTO 校验和授权守卫

#### 数据库
- **PostgreSQL**
- **Prisma** 或 **TypeORM**

#### 存储
- 第一版使用本地头像与媒体存储
- 严格校验与权限控制

#### 部署
- Docker Compose
- 反向代理 + HTTPS
- 单命令启动

## 5. 代码层面的业务域拆分

后端可以拆分为以下功能域：

- `auth`
- `users`
- `friendships`
- `messages`
- `presence`
- `notifications`
- `archive`
- `community-posts`
- `comments`
- `cards`
- `decks`
- `matches`
- `tournaments`
- `gamification`
- `search`
- `uploads`
- `admin-moderation`

这样的结构方便把具体实现与 sujet 中 claim 的模块一一对应起来。

## 6. 数据模型提案

### 6.1 核心实体

#### users
- id
- email
- password_hash
- display_name
- avatar_url
- bio
- role
- preferred_language
- created_at
- updated_at

#### friendships
- id
- requester_id
- addressee_id
- status
- created_at

#### messages
- id
- sender_id
- receiver_id
- content
- created_at
- read_at

#### historical_entries
- id
- title
- date_month
- date_day
- summary
- content
- category
- source_reference
- image_url
- created_by
- created_at

#### community_posts
- id
- author_id
- title
- content
- visibility
- created_at
- updated_at

#### comments
- id
- post_id
- author_id
- content
- created_at

#### notifications
- id
- user_id
- type
- payload_json
- is_read
- created_at

#### cards
- id
- name
- type
- rarity
- cost
- attack_value
- defense_value
- effect_definition
- historical_entry_id

#### user_cards
- id
- user_id
- card_id
- quantity

#### decks
- id
- user_id
- name
- created_at

#### deck_cards
- id
- deck_id
- card_id
- quantity

#### matches
- id
- player_one_id
- player_two_id
- winner_id
- started_at
- ended_at
- status

#### match_events
- id
- match_id
- turn_number
- event_type
- payload_json
- created_at

#### tournaments
- id
- name
- status
- created_by
- created_at

#### tournament_participants
- id
- tournament_id
- user_id
- registered_at

#### tournament_matches
- id
- tournament_id
- round_number
- match_id
- created_at

#### achievements
- id
- user_id
- type
- label
- description
- created_at

#### user_xp
- id
- user_id
- xp
- level
- updated_at

## 7. 实时与并发策略

### 7.1 平台级并发使用
多个用户可以同时：
- 浏览档案
- 发帖
- 评论
- 添加好友
- 发送消息
- 接收通知
- 创建或加入对局

### 7.2 游戏与在线状态的实时能力
- 通过 WebSocket session 维护在线状态
- 实时同步游戏对局
- 实时发送挑战邀请
- 支持重连逻辑
- 若实现 tournament，则同步比赛状态

### 7.3 数据完整性策略
- 游戏状态由服务端权威控制
- 回合处理
- 所有关键动作都走后端校验
- 数据库约束关系一致性
- 对局动作以经过验证的事件形式记录

并发行为必须被正确处理，不能出现数据损坏或 race condition。fileciteturn0file0

## 8. 安全与法律基础

即便不 claim 专门的 cybersécurité 模块，平台也必须具备扎实的基础安全。

### 认证
- 密码加盐哈希
- 安全 session 或 token
- 受保护路由
- 后端权限校验

### 输入校验
- 前端校验
- 后端校验
- 严格的上传校验
- MIME 类型、格式、大小限制

### 内容治理
- 审核规则
- 举报与删除机制
- 在法律页面中说明平台责任边界

### 法律页面
应用必须提供：
- Privacy Policy
- Terms of Service

并且必须可见、相关、不能只是占位内容。

## 9. 推荐模块矩阵

### 先优先完成的基础模块

#### 1. Web — Major  
**前后端都使用 framework**  
**分值：2**

实现方式：
- 前端使用 Next.js 或 React
- 后端使用 NestJS

#### 2. Web — Major  
**实时功能，基于 WebSockets 或类似技术**  
**分值：2**

实现方式：
- 游戏同步
- 在线状态
- 实时挑战
- 通知刷新

#### 3. Web — Major  
**允许用户与其他用户互动**  
**分值：2**

sujet 最低要求：
- basic chat
- profile system
- friends system

实现方式：
- 私聊
- 公共主页
- 添加 / 删除好友
- 在线状态展示

#### 4. User Management — Major  
**标准用户管理与认证**  
**分值：2**

实现方式：
- 个人资料可编辑
- 头像上传
- 好友系统
- profile 页面
- 在线状态整合

#### 5. Gaming and user experience — Major  
**实现一个完整的网页游戏，用户可以彼此对战**  
**分值：2**

实现方式：
- 一个双人卡牌对战游戏
- 清晰的胜负规则
- 实时对局
- 结果持久化

#### 6. Gaming and user experience — Major  
**Remote players**  
**分值：2**

实现方式：
- 两台不同机器
- 同一场实时对局
- 断线处理
- 重连支持

#### 7. Web — Minor  
**数据库使用 ORM**  
**分值：1**

实现方式：
- Prisma 或 TypeORM
- migration 驱动 schema
- 类型化访问层

#### 8. User Management — Minor  
**游戏统计与对局历史**  
**分值：1**

依赖：
- 至少先有一个游戏

实现方式：
- 胜负统计
- 对局列表
- 排名
- 成长摘要

### 基础小计 = 14 分

### 扩展模块，用来达到 21 分

#### 9. Web — Minor  
**完整通知系统，覆盖创建、更新、删除动作**  
**分值：1**

实现方式：
- 好友请求通过
- 新评论
- 对局邀请
- 比赛更新
- 帖子互动通知

#### 10. Gaming and user experience — Minor  
**比赛系统 tournament**  
**分值：1**

依赖：
- 需要已有游戏

实现方式：
- 报名
- bracket 生成
- 对阵顺序
- 进度追踪

#### 11. Gaming and user experience — Minor  
**游戏自定义选项**  
**分值：1**

实现方式：
- deck archetype
- 不同主题牌背或棋盘
- 可选规则变体
- 默认选项始终存在

#### 12. Gaming and user experience — Minor  
**Gamification 系统**  
**分值：1**

实现方式：
至少做以下中的 3 项：
- achievements
- badges
- leaderboard
- XP / level system
- rewards

#### 13. Accessibility and Internationalization — Minor  
**至少支持三种语言**  
**分值：1**

实现方式：
- 英语
- 法语
- 中文
- 所有前端文本都进入可翻译资源文件
- 语言切换器

#### 14. User Management — Minor  
**OAuth 2.0 远程认证**  
**分值：1**

实现方式：
- 42 OAuth 或 Google OAuth

#### 15. Web — Minor  
**高级搜索，包括过滤、排序、分页**  
**分值：1**

实现方式：
- 搜索历史条目
- 搜索社区帖子
- 类别过滤
- 日期排序
- 分页结果

### 扩展小计 = 7 分

1 + 1 + 1 + 1 + 1 + 1 + 1 = **7**

### 总分 = 21 分

基础 14 + 扩展 7 = **21 分**

## 10. 推荐实现顺序

### 第一步 —— mandatory 基础
- 仓库初始化
- Docker
- 数据库 schema
- 认证
- 前端骨架
- HTTPS
- 法律页面

### 第二步 —— 14 分基础
- profile
- friends
- chat
- realtime presence
- 完整卡牌游戏
- remote play
- ORM
- 历史战绩与统计

到这里，你们已经形成可通过的主线。

### 第三步 —— 21 分推进
- notifications
- tournament
- customization
- gamification
- multilingual
- OAuth
- advanced search

### 第四步 —— 额外模块（不一定要做）
例如：
- spectator mode
- 更完整的文件系统
- 更多浏览器兼容
- 更复杂的 analytics
- 第二个游戏

## 11. 预备替换模块

### 替换方案 A — Web Minor  
**文件上传与管理系统**  
**分值：1**

可能实现：
- 社区帖子或历史条目的媒体上传
- 预览
- 删除
- 权限控制

### 替换方案 B — Accessibility and Internationalization Minor  
**额外浏览器支持**  
**分值：1**

可能实现：
- Chrome + Firefox + Safari 或 Edge
- 测试文档
- 针对性修复

### 替换方案 C — Gaming and user experience Minor  
**Spectator mode**  
**分值：1**

可能实现：
- 观看实时对局
- 只读实时状态流

### 替换方案 D — Web Minor  
**PWA**  
**分值：1**

可能实现：
- 可安装
- shell 缓存
- 静态档案页离线 fallback

这种 reserve strategy 很重要，因为它可以让你们替换一个脆弱模块，而不需要重构整个项目。

## 12. 针对 21 分项目的团队分工建议

### 4 人团队示例

#### 成员 1 —— Product Owner + Developer
- 产品范围
- 历史内容结构
- 法律页面
- 搜索功能
- 多语言文本结构

#### 成员 2 —— Project Manager + Developer
- issues 管理
- 沟通协调
- 好友、聊天、通知
- 审核流程

#### 成员 3 —— Technical Lead + Developer
- 后端架构
- 认证
- ORM / 数据库
- 角色权限
- 集成与部署 review

#### 成员 4 —— Developer
- 前端 UI
- 响应式布局
- 游戏界面
- tournament 与 gamification 界面

### 如果有第 5 个人
可以单独负责：
- 游戏引擎
- WebSocket 同步
- 对局逻辑
- 重连机制

## 13. 分数汇总表

| # | 模块 | 类型 | 分值 |
|---|---|---:|---:|
| 1 | 前后端 frameworks | Major | 2 |
| 2 | 实时功能 | Major | 2 |
| 3 | 用户互动：chat + profile + friends | Major | 2 |
| 4 | 标准用户管理与认证 | Major | 2 |
| 5 | 完整网页游戏 | Major | 2 |
| 6 | Remote players | Major | 2 |
| 7 | ORM | Minor | 1 |
| 8 | 统计与对局历史 | Minor | 1 |
| 9 | 通知系统 | Minor | 1 |
| 10 | Tournament 系统 | Minor | 1 |
| 11 | 游戏自定义 | Minor | 1 |
| 12 | Gamification 系统 | Minor | 1 |
| 13 | 多语言支持 | Minor | 1 |
| 14 | OAuth 2.0 | Minor | 1 |
| 15 | 高级搜索 | Minor | 1 |

**总分 = 21 分**

## 21. 预备模块表

| 预备模块 | 类型 | 分值 |
|---|---:|---:|
| 文件上传与管理系统 | Minor | 1 |
| 额外浏览器支持 | Minor | 1 |
| Spectator mode | Minor | 1 |
| PWA | Minor | 1 |

这些预备模块可以作为替换方案，在某个 1 分模块不稳定时及时补位。


## 22. 卡牌游戏详解
