## 旅游网站后端

### 1. 对应文件及文件夹的用途

1. models 存放操作数据库的文件
2. public 存放上传的图片等资源
3. routes 存放路由文件
4. index.js 程序主文件

### 2. 对应接口设计

1. 注册
     1. api: ／signup
     2. method: post
     3. request: { username: '', password: '', email: '', photo: 'url' }
     4. response: { code: 0(成功) || -1(失败), description(描述信息) }
2. 登陆
     1. api: /signin
     2. method: post
     3. request: { username: '', password: ''}
     4. response: { code: 0(成功) || -1(失败), description(描述信息)}
3. 登出
     1. api: /signout
     2. method: get
4. 新建路线
     1. api: /roadline/create
     2. method: /post
     3. request: { userId: '', city: '', roadline: { d1: [{place: "",time: ""},{place: "",time: ""},{place: "",time: ""}],d2: []}}
     4. response: { code: 0(成功) || -1(失败), description(描述信息)}
5. 某个城市的所有路线
     1. api: /roadline?city=''
     2. method: /get
     3. response: {code: 0(成功) || -1(失败), description(描述信息), result: {list: {roadline: { d1: [{place: "",time: ""},{place: "",time: ""},{place: "",time: ""}],d2: []}}}}
6. 某条具体路线
     1. api: /roadline/:roadlineId
     2. method: /get
     3. respose: {code: 0(成功) || -1(失败), description(描述信息), result: {roadline: { d1: [{place: "",time: ""},{place: "",time: ""},{place: "",time: ""}],d2: []}}}
7. 新建攻略
     1. api: /strategy/create
     2. method: /post
     3. request: { userId: '', title: '', tag: [ '', ''], strategy: [{paratit: '', titbg: '', content: ''}, {paratit: '', titbg: '', content: ''}]}
     4. response: { code: 0(成功) || -1(失败), description(描述信息)}
8. 某个城市下的所有攻略
     1. api: /strategy?city=''
     2. method: /get
     4. response: { code: 0(成功) || -1(失败 ,result: {list: [{strategyId: '',title: '', username: '', userId: '', content: ''},{strategyId: '',title: '', username: '', userId: '', content: ''}]}}
9. 某条攻略的详细内容
     1. api: /strategy/:strategyId
     2. method: /get
     3. response: { code: 0(成功) || -1(失败), description(描述信息), strategy: {strategyId: '',title: '', username: '', userId: '', content: ''} }
10. 发表问题
     1. api: /question/create
     2. method: /post
     3. request: {title: '', description: '', city: '', tag: []}
     4. response: { code: 0(成功) || -1(失败), description(描述信息)}
11. 问题列表
     1. api: /question
     2. method: /get
     3. response: { code: 0(成功) || -1(失败), description(描述信息),
                    result: {
                        hotQuestion: [{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''},{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''},{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''}]
                        newQuestion: [{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''},{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''},{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''}]
                        noAnswerQuestion: [{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''},{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''},{questionId: '', question: '',username: '', usernameId'',answerId:'', answer: ''}]
                        } }
12. 具体问题
     1. api: /question/:questionId
     2. method: /get
     3. response: { code: 0(成功) || -1(失败), description(描述信息),
                    result: {questionId: '', question: '',username: '', usernameId:'',
                    list: [{username: '', userId: '', answerId: '', answes: ''},{username: '', userId: '', answerId: '', answes: ''}]}
     }
13. 攻略评论
     1. api: /strategy/commits/create
     2. method: /post
     3. request: { strategyId: '', username: '', usernameId: '', content:''}
     4. response: { code: 0(成功) || -1(失败), description(描述信息)}
14. 回答问题
     1. api: /question/answer/create
     2. method: /post
     3. request: { questionId: '', username: '', username: '', content: ''}
     4. response: { code: 0(成功) || -1(失败), description(描述信息)}
15. 回答评论
     1. api: /answer/commits/create
     2. method: /post
     3. request: { answerId: '', username: '', usernameId: '', content:''}
     4. response: { code: 0(成功) || -1(失败), description(描述信息)}
