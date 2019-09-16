{
	"code": 0,
	"msg": "0",
	"data": [{
		"name": "basicdata",
		"title": "基础数据",
		"icon": "layui-icon-list",
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
		"icon": "layui-icon-group",
		"list": [{
			"name": "createpaper",
			"title": "需求设置",
			"jump": "train/demand/Demand"
		}, {
			"name": "createpaperquickly",
			"title": "培训预算",
			"jump": "train/budget/Budget"
		}, {
			"name": "managerpaper",
			"title": "计划报名",
			"jump": "train/plan/Plan"
		},{
			"name": "paperclassification",
			"title": "记录评估",
			"jump": "train/record/Record"
		},{
			"name": "paperclassification",
			"title": "OJT记录",
			"jump": "train/zojt/addojt"
		}]
	}, {
		"name": "selfTesting",
		"title": "报表中心",
		"icon": "layui-icon-form",
		"list": [{
			"name": "createpaper",
			"title": "需求查询",
			"jump": "report/demand/inquire"
	    }, {
			"name": "createpaper",
			"title": "需求统计",
			"jump": "report/need/statistics"
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
		"icon": "layui-icon-set",
		"list": [{
			"name": "paperanalysis",
			"title": "系统参数",
			"jump": "parameter/system/system"
		}, {
			"name": "examanalysis",
			"title": "用户权限",
			"jump": "parameter/user/jurisdiction"
		}]
	}]
}
