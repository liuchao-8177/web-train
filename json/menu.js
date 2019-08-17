{
	"code": 0,
	"msg": "",
	"data": [{
		"name": "basicdata",
		"title": "基础数据",
		"icon": "layui-icon-home",
		"list": [{
			"name": "employeeinformation",
			"title": "员工信息",
			"jump": "staff/addstaff/addstaffbankapply"
		}, {
			"name": "CourseInformation",
			"title": "课程信息",
			"jump": "staff/courseInformation/addcourse"
		}, {
			"name": "LecturerInformation",
			"title": "讲师信息",
			"jump": "staff/lecturer/addlecturer"
		}, {
			 "name": "importtest",
			 "title": "批量导入",
			 "jump": "staff/phone/phoneApply"
		}]
	}, {
		"name": "examination",
		"title": "培训运作",
		"icon": "layui-icon-home",
		"list": [{
			"name": "createpaper",
			"title": "需求设置",
			"jump": "train/demand/addmand"
		}, {
			"name": "createpaperquickly",
			"title": "培训预算",
			"jump": "train/eudget/addeuget"
		}, {
			"name": "managerpaper",
			"title": "计划报名",
			"jump": "train/plan/addplan"
		},{
			"name": "paperclassification",
			"title": "记录评估",
			"jump": "train/record/addrecord"
		},{
			"name": "paperclassification",
			"title": "OJT记录",
			"jump": "train/zojt/addojt"
		}]
	}, {
		"name": "selfTesting",
		"title": "报表中心",
		"icon": "layui-icon-home",
		"list": [{
			"name": "createpaper",
			"title": "需求查询",
			"jump": "report/demand/inquire"
	    }, {
			"name": "createpaper",
			"title": "需求统计",
			"jump": "report/demand/statistics"
		}, {
			"name": "createpaper",
			"title": "记录一览表",
			"jump": "report/record/general"
		}, {
			"name": "createpaper",
			"title": "费用统计",
			"jump": "report/calculate/expense"
		}, {
			"name": "createpaper",
			"title": "其他报表",
			"jump": "report/else/statement"
		}]
	}, {
		"name": "analysis",
		"title": "系统参数",
		"icon": "layui-icon-home",
		"list": [{
			"name": "paperanalysis",
			"title": "系统参数",
			"jump": "parameter/system"
		}, {
			"name": "examanalysis",
			"title": "用户权限",
			"jump": "parameter/jurisdiction"
		}]
	}, {
		"name": "user",
		"title": "用户",
		"icon": "layui-icon-user",
		"list": [{
			"name": "user",
			"title": "网站用户",
			"jump": "user/user/list"
		}, {
			"name": "administrators-list",
			"title": "后台管理员",
			"jump": "user/administrators/list"
		}, {
			"name": "administrators-rule",
			"title": "角色管理",
			"jump": "user/administrators/role"
		}]
	}, {
		"name": "set",
		"title": "设置",
		"icon": "layui-icon-set",
		"list": [{
			"name": "system",
			"title": "系统设置",
			"spread": true,
			"list": [{
				"name": "website",
				"title": "网站设置"
			}, {
				"name": "email",
				"title": "邮件服务"
			}]
		}, {
			"name": "user",
			"title": "我的设置",
			"spread": true,
			"list": [{
				"name": "info",
				"title": "基本资料"
			}, {
				"name": "password",
				"title": "修改密码"
			}]
		}]
	}, {
		"name": "get",
		"title": "授权",
		"icon": "layui-icon-auz",
		"jump": "system/get"
	}]
}
