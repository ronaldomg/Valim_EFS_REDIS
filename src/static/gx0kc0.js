/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:22.59
*/
gx.evt.autoSkip = false;
gx.define('gx0kc0', false, function () {
   this.ServerClass =  "gx0kc0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV9pTypeDBSchema=gx.fn.getControlValue("vPTYPEDBSCHEMA") ;
      this.AV10pTypeDBName=gx.fn.getControlValue("vPTYPEDBNAME") ;
   };
   this.e132192_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142191_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0kc0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9844,33,"TYPEDBSCHEMA","DBSchema","","TypeDBSchema","svchar",0,"px",20,20,"left",null,[],9844,"TypeDBSchema",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9845,34,"TYPEDBNAME","DBName","","TypeDBName","svchar",0,"px",40,40,"left",null,[],9845,"TypeDBName",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9859,35,"TYPEDBATTRIBUTE","DBAttribute","Selecionar","TypeDBAttribute","svchar",0,"px",40,40,"left",null,[],9859,"TypeDBAttribute",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTYPEDBSCHEMA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTYPEDBSCHEMA",gxz:"ZV6cTypeDBSchema",gxold:"OV6cTypeDBSchema",gxvar:"AV6cTypeDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTypeDBSchema=Value},v2z:function(Value){gx.O.ZV6cTypeDBSchema=Value},v2c:function(){gx.fn.setControlValue("vCTYPEDBSCHEMA",gx.O.AV6cTypeDBSchema,0)},c2v:function(){gx.O.AV6cTypeDBSchema=this.val()},val:function(){return gx.fn.getControlValue("vCTYPEDBSCHEMA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTYPEDBNAME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTYPEDBNAME",gxz:"ZV7cTypeDBName",gxold:"OV7cTypeDBName",gxvar:"AV7cTypeDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTypeDBName=Value},v2z:function(Value){gx.O.ZV7cTypeDBName=Value},v2c:function(){gx.fn.setControlValue("vCTYPEDBNAME",gx.O.AV7cTypeDBName,0)},c2v:function(){gx.O.AV7cTypeDBName=this.val()},val:function(){return gx.fn.getControlValue("vCTYPEDBNAME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTYPEDBATTRIBUTE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTYPEDBATTRIBUTE",gxz:"ZV8cTypeDBAttribute",gxold:"OV8cTypeDBAttribute",gxvar:"AV8cTypeDBAttribute",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTypeDBAttribute=Value},v2z:function(Value){gx.O.ZV8cTypeDBAttribute=Value},v2c:function(){gx.fn.setControlValue("vCTYPEDBATTRIBUTE",gx.O.AV8cTypeDBAttribute,0)},c2v:function(){gx.O.AV8cTypeDBAttribute=this.val()},val:function(){return gx.fn.getControlValue("vCTYPEDBATTRIBUTE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV13Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TYPEDBSCHEMA",gxz:"Z9844TypeDBSchema",gxold:"O9844TypeDBSchema",gxvar:"A9844TypeDBSchema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9844TypeDBSchema=Value},v2z:function(Value){gx.O.Z9844TypeDBSchema=Value},v2c:function(row){gx.fn.setGridControlValue("TYPEDBSCHEMA",row || gx.fn.currentGridRowImpl(31),gx.O.A9844TypeDBSchema,0)},c2v:function(){gx.O.A9844TypeDBSchema=this.val()},val:function(row){return gx.fn.getGridControlValue("TYPEDBSCHEMA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TYPEDBNAME",gxz:"Z9845TypeDBName",gxold:"O9845TypeDBName",gxvar:"A9845TypeDBName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9845TypeDBName=Value},v2z:function(Value){gx.O.Z9845TypeDBName=Value},v2c:function(row){gx.fn.setGridControlValue("TYPEDBNAME",row || gx.fn.currentGridRowImpl(31),gx.O.A9845TypeDBName,0)},c2v:function(){gx.O.A9845TypeDBName=this.val()},val:function(row){return gx.fn.getGridControlValue("TYPEDBNAME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TYPEDBATTRIBUTE",gxz:"Z9859TypeDBAttribute",gxold:"O9859TypeDBAttribute",gxvar:"A9859TypeDBAttribute",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9859TypeDBAttribute=Value},v2z:function(Value){gx.O.Z9859TypeDBAttribute=Value},v2c:function(row){gx.fn.setGridControlValue("TYPEDBATTRIBUTE",row || gx.fn.currentGridRowImpl(31),gx.O.A9859TypeDBAttribute,0)},c2v:function(){gx.O.A9859TypeDBAttribute=this.val()},val:function(row){return gx.fn.getGridControlValue("TYPEDBATTRIBUTE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cTypeDBSchema = "" ;
   this.ZV6cTypeDBSchema = "" ;
   this.OV6cTypeDBSchema = "" ;
   this.AV7cTypeDBName = "" ;
   this.ZV7cTypeDBName = "" ;
   this.OV7cTypeDBName = "" ;
   this.AV8cTypeDBAttribute = "" ;
   this.ZV8cTypeDBAttribute = "" ;
   this.OV8cTypeDBAttribute = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9844TypeDBSchema = "" ;
   this.O9844TypeDBSchema = "" ;
   this.Z9845TypeDBName = "" ;
   this.O9845TypeDBName = "" ;
   this.Z9859TypeDBAttribute = "" ;
   this.O9859TypeDBAttribute = "" ;
   this.AV6cTypeDBSchema = "" ;
   this.AV7cTypeDBName = "" ;
   this.AV8cTypeDBAttribute = "" ;
   this.AV9pTypeDBSchema = "" ;
   this.AV10pTypeDBName = "" ;
   this.AV5LinkSelection = "" ;
   this.A9844TypeDBSchema = "" ;
   this.A9845TypeDBName = "" ;
   this.A9859TypeDBAttribute = "" ;
   this.Events = {"e132192_client": ["ENTER", true] ,"e142191_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTypeDBSchema',fld:'vCTYPEDBSCHEMA'},{av:'AV7cTypeDBName',fld:'vCTYPEDBNAME'},{av:'AV8cTypeDBAttribute',fld:'vCTYPEDBATTRIBUTE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9844TypeDBSchema',fld:'TYPEDBSCHEMA'},{av:'A9845TypeDBName',fld:'TYPEDBNAME'}],[{av:'AV9pTypeDBSchema',fld:'vPTYPEDBSCHEMA'},{av:'AV10pTypeDBName',fld:'vPTYPEDBNAME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTypeDBSchema',fld:'vCTYPEDBSCHEMA'},{av:'AV7cTypeDBName',fld:'vCTYPEDBNAME'},{av:'AV8cTypeDBAttribute',fld:'vCTYPEDBATTRIBUTE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTypeDBSchema',fld:'vCTYPEDBSCHEMA'},{av:'AV7cTypeDBName',fld:'vCTYPEDBNAME'},{av:'AV8cTypeDBAttribute',fld:'vCTYPEDBATTRIBUTE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTypeDBSchema',fld:'vCTYPEDBSCHEMA'},{av:'AV7cTypeDBName',fld:'vCTYPEDBNAME'},{av:'AV8cTypeDBAttribute',fld:'vCTYPEDBATTRIBUTE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTypeDBSchema',fld:'vCTYPEDBSCHEMA'},{av:'AV7cTypeDBName',fld:'vCTYPEDBNAME'},{av:'AV8cTypeDBAttribute',fld:'vCTYPEDBATTRIBUTE'}],[]];
   this.setVCMap("AV9pTypeDBSchema", "vPTYPEDBSCHEMA", 0, "svchar");
   this.setVCMap("AV10pTypeDBName", "vPTYPEDBNAME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0kc0());
