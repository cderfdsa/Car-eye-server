Ext.define("MultiMediaDataApp.model.MultiMediaInfoModel",{
	extend : 'Ext.data.Model',  
    fields : [{  
                name : 'id',  
                type : 'int',  
                useNull : true//这样数字如果值为空则不会自动转成0,则提交时注意后台bean类中的属性int要用对象类型，否则解析出错  
            }, {  
                name : 'blocid',  
                type : 'int',
                useNull : true
            }, {  
                name : 'userid',  
                type : 'string'  
            }, {  
                name : 'terminal',  
                type : 'string'  
            }, {  
                name : 'blocname',  
                type : 'string'  
            }, {  
                name : 'carnumber',  
                type : 'string'  
            },{  
                name : 'dataid',  
                type : 'int'  
            },{  
                name : 'mediatype',  
                type : 'int'  
            },{  
                name : 'format',  
                type : 'int'  
            },{  
                name : 'eventcode',  
                type : 'int'  
            },{  
                name : 'accessid',  
                type : 'int'  
            },{  
                name : 'multimediapath',  
                type : 'string'  
            },{  
                name : 'createtime',  
                type : 'string'
            }],  
    idProperty : 'id'// 极为重要的配置。关系到表格修改数据的获取 
 });