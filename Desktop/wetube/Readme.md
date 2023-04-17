# 기간

2023.04.15 ~ 2023.04.24

# Objective

- Node.js에 대한 전반적인 이해도 상승
- MongoDB로 CRUD 만들기
- 비디오 플레이어 만들기
- 제공된 블루프린트를 바탕으로 로그인 Auth 시스템 만들기

# STACK

- ES6
- NodeJS
- Pug
- MogoDB

# Router

### global

- / → Home
- /join → Join
- /login → Login
- /search → Search

### users

- /users/:id → user
- /users/logout → Logout
- /users/edit → Edit my profile
- /users/delete → Delete my profile

### Videos

- /videos/:id → Watch videos
- /videos/:id/upload - Upload video
- /videos/:id/edit → Edit Video
- /videos/:id/delete → Delete Video

### Video Comments

- /videos/comments → Comment on a video
- /videos/comments/delete → Delete a comment of a video
