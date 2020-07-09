# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|

### Association

- has_many :groups
- has_many :messages through: :groups_users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|message_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association

- has_many :message through: :messages_groups
- has_many :user through: :groups_users


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|created_at|timestamp|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|


### Association

- belongs_to :user
- has_many :grouos through: :messages_groups


## messages_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|messages_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :message
- belongs_to :group


## groups_userテーブル

|Column|Type|Options|
|------|----|-------|
|groups_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user