/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:44:4.6
*/
gx.evt.autoSkip = false;
gx.define('hgnfeerros', false, function () {
   this.ServerClass =  "hgnfeerros" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5SessaoNfe=gx.fn.getControlValue("vSESSAONFE") ;
   };
   this.e111392_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141392_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e151392_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8];
   this.GXLastCtrlId =8;
   this.GrderrosContainer = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grderros","Grderros","GrderrosContainer",this.CmpContext,this.IsMasterPage,"hgnfeerros",[],false,1,true,true,0,false,false,false,"NotaEletronica",0,"px","Novo registro",false,false,false,null,null,false,"AV6Nf",false,[1,1,1,1]);
   var GrderrosContainer = this.GrderrosContainer;
   GrderrosContainer.addSingleLineEdit("GXV107",7,"CTLERRO","Descrição do Erro","","GXV107","char",0,"px",9999,80,"left",null,[],"GXV107","GXV107",true,0,false,false,"Attribute",1,"");
   this.setGrid(GrderrosContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[7]={lvl:2,type:"char",len:9999,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GrderrosContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLERRO",gxz:"ZV12GXV107",gxold:"OV12GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV12GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLERRO",row || gx.fn.currentGridRowImpl(6),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLERRO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[8]={fld:"DIV2", format:2,grid:0};
   this.ZV12GXV107 = "" ;
   this.OV12GXV107 = "" ;
   this.AV5SessaoNfe = "" ;
   this.GXV107 = "" ;
   this.Events = {"e111392_client": ["'FECHAR'", true] ,"e141392_client": ["ENTER", true] ,"e151392_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRDERROS_nFirstRecordOnPage'},{av:'GRDERROS_nEOF'},{av:'AV6Nf',fld:'vNF',grid:6}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5SessaoNfe',fld:'vSESSAONFE'}],[]];
   this.setVCMap("AV5SessaoNfe", "vSESSAONFE", 0, "svchar");
   this.addGridBCProperty("Nf", ["Erros", "Erro"], this.GXValidFnc[7], "AV6Nf");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgnfeerros());
