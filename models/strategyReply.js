var marked = require('marked');
var Reply = require('../lib/mongo').StrategyReply;

// 将 comment 的 content 从 markdown 转换成 html
Reply.plugin('contentToHtml', {
    afterFind: function (replys) {
        return replys.map(function (reply) {
            reply.content = marked(reply.content);
            return reply;
        });
    }
});

module.exports = {
    // 创建一个留言
    create: function create(reply) {
        return Reply.create(reply).exec();
    },

    // 通过用户 id 和回复 id 删除一个回复
    delReplyById: function delReplyById(replyId, author) {
        return Reply.remove({ author: author, _id: replyId }).exec();
    },

    // 通过评论 id 删除该评论下所有回复
    delReplysByCommentId: function delReplysByCommentId(commentId) {
        return Reply.remove({ replyId: replyId }).exec();
    },

    // 通过评论 id 获取该评论下所有回复，按回复创建时间升序
    getReplys: function getReplys(strategyCommentId) {
        return Reply
            .find({ strategyCommentId: strategyCommentId })
            .populate({ path: 'author', model: 'User' })
            .sort({ _id: 1 })
            .addCreatedAt()
            .exec();
    },

    // 通过评论 id 获取该评论下回复数
    getReplysCount: function getReplysCount(commentId) {
        return Reply.count({ commentId: commentId }).exec();
    }
};