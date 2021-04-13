/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:44.62
*/
gx.evt.autoSkip = false;
gx.define('hconsultalogblob', false, function () {
   this.ServerClass =  "hconsultalogblob" ;
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
   };
   this.e111yi2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e141yi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,9,10];
   this.GXLastCtrlId =10;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultalogblob",[],false,1,true,true,0,false,false,false,"CollLogCamposBlob.LogCamplosBlobItem",0,"px","Novo registro",false,false,false,null,null,false,"AV5LogCamposBlob",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV107",7,"CTLLOGTABELACAMPO","Nome do Campo","","LogTabelaCampoBlob","svchar",0,"px",31,31,"left",null,[],"GXV107","GXV107",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV108",8,"CTLLOGTABELAVALORANTIGO","Valor Antigo","","LogTabelaValorAntigoLVarchar","vchar",0,"px",65536,80,"left",null,[],"GXV108","GXV108",true,0,false,false,"",0,"");
   Grid1Container.addSingleLineEdit("GXV109",9,"CTLLOGTABELAVALORNOVO","Valor Novo","","LogTabelaValorNovoLVarChar","vchar",0,"px",65536,80,"left",null,[],"GXV109","GXV109",true,0,false,false,"",0,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[7]={lvl:2,type:"svchar",len:31,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELACAMPO",gxz:"ZV13GXV107",gxold:"OV13GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV13GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELACAMPO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOGTABELACAMPO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"vchar",len:65536,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELAVALORANTIGO",gxz:"ZV14GXV108",gxold:"OV14GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV108=Value},v2z:function(Value){gx.O.ZV14GXV108=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELAVALORANTIGO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOGTABELAVALORANTIGO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"vchar",len:65536,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLLOGTABELAVALORNOVO",gxz:"ZV15GXV109",gxold:"OV15GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV109=Value},v2z:function(Value){gx.O.ZV15GXV109=Value},v2c:function(row){gx.fn.setGridControlValue("CTLLOGTABELAVALORNOVO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLLOGTABELAVALORNOVO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[10]={fld:"DIV2", format:2,grid:0};
   this.ZV13GXV107 = "" ;
   this.OV13GXV107 = "" ;
   this.ZV14GXV108 = "" ;
   this.OV14GXV108 = "" ;
   this.ZV15GXV109 = "" ;
   this.OV15GXV109 = "" ;
   this.GXV107 = "" ;
   this.GXV108 = "" ;
   this.GXV109 = "" ;
   this.Events = {"e111yi2_client": ["ENTER", true] ,"e141yi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV5LogCamposBlob',fld:'vLOGCAMPOSBLOB',grid:6}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.addGridBCProperty("Logcamposblob", ["LogTabelaCampoBlob"], this.GXValidFnc[7], "AV5LogCamposBlob");
   this.addGridBCProperty("Logcamposblob", ["LogTabelaValorAntigoLVarchar"], this.GXValidFnc[8], "AV5LogCamposBlob");
   this.addGridBCProperty("Logcamposblob", ["LogTabelaValorNovoLVarChar"], this.GXValidFnc[9], "AV5LogCamposBlob");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalogblob());
