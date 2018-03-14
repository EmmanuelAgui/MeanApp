const mongoose = require('mongoose');

const Schema =mongoose.Schema
const ObjectId=Schema.ObjectId
//const url="mongodb://用户名:密码@ip地址:3717/数据库名称"
const url ="mongodb://huizhe:huizhe!2017@39.108.238.128:3717/huizhe_data_happy"

let Db

try{
    mongoose.connect(url)
    Db=mongoose.connection;
}catch(e){
    console.error('数据库连接错误！\n',e)
    process.exit(10)
}

Db.on('error',(err)=>{console.log(err)})
Db.once('`openUri',()=>{
    console.log('成功连接数据库！')
})

const app_Schema=mongoose.Schema({
    name: String, // 应用名字
    author: {
        _id: ObjectId, //用户 ID
        username: String, //用户名
        realname:String,//真实姓名
        avatar: String, //用户logo
    },
    company:String,//用户公司
    logo: String, //应用头像
    description: String, //应用描述
    tags: Array, // 领域
    visible: { type: String, default: "unknown" }, //1、public，2、private,3、unknown
    status: { type: Number, default: 10 }, //10草稿、15未通过、20待审核、40审核通过未支付、50进行中、60已结束,-1已删除
    app_type: { type: String, default: '课题' }, // 课题
    price: Number,
    anonymous: { type: Boolean, default: false },
    nickname: String,
    charge: String, //charge,free
    content: String,
    charts:Array,
    articles:Array,
    answer_num: Number,
    msgs: Array, //消息
    whitelists: [{
        username: String,
        institution: String, //用户所属机构
        addby: String //用户由谁添加
    }], //私有用户列表
    ended_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

const answer_Schema = mongoose.Schema({
    name: String,
    appinfo: {
        name: String,
        company:String,
        author: {
            _id: ObjectId, //用户 ID
            username: String, //用户名
            avatar: String //用户logo
        },
        visible: String,
        nickname: String
    },
    appid: ObjectId,
    author: {
        _id: ObjectId, //用户 ID
        username: String, //用户名
        realname:String,
        avatar: String //用户logo
    },
    charts:Array,
    articles:Array,
    institution: { type: String, default: 'huizhe' }, //机构
    addby: String,
    nickname: String,
    anonymous: { type: Boolean, default: false },
    applied_at: { type: Date, default: Date.now },
    passed_at: { type: Date, default: Date.now },
    rank_a: { type: Number, default: 0 }, //甲方评分
    rank_b: { type: Number, default: 0 }, //平台排评分
    content: String, //答复方案
    visible: { type: String, default: 'private' }, //答案公开与否
    updated_at: { type: Date, default: Date.now }, //保存时间
    status: { type: Number, default: 10 }, // -1已删除,10草稿,15初审未通过，20待初审,30初审通过待复审,40复审通过，50采纳,60结账
    msgs: Array, //消息
    other: Object
})

let db={}
db.apps = mongoose.model('ketiapp',app_Schema)
db.answers=mongoose.model('answer',answer_Schema)
module.exports=db