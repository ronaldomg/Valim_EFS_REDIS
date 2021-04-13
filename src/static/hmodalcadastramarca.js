/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:1:18.37
*/
gx.evt.autoSkip = false;
gx.define('hmodalcadastramarca', false, function () {
   this.ServerClass =  "hmodalcadastramarca" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e12or2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13or2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15or2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,10,12];
   this.GXLastCtrlId =12;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[7]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOESTID",gxz:"ZV11OpcaoClassificacaoEstId",gxold:"OV11OpcaoClassificacaoEstId",gxvar:"AV11OpcaoClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OpcaoClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV11OpcaoClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOESTID",gx.O.AV11OpcaoClassificacaoEstId,0)},c2v:function(){gx.O.AV11OpcaoClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOESTDESCRICAO",gxz:"ZV12OpcaoClassificacaoEstDescricao",gxold:"OV12OpcaoClassificacaoEstDescricao",gxvar:"AV12OpcaoClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12OpcaoClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV12OpcaoClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOESTDESCRICAO",gx.O.AV12OpcaoClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV12OpcaoClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   this.AV11OpcaoClassificacaoEstId = "" ;
   this.ZV11OpcaoClassificacaoEstId = "" ;
   this.OV11OpcaoClassificacaoEstId = "" ;
   this.AV12OpcaoClassificacaoEstDescricao = "" ;
   this.ZV12OpcaoClassificacaoEstDescricao = "" ;
   this.OV12OpcaoClassificacaoEstDescricao = "" ;
   this.AV11OpcaoClassificacaoEstId = "" ;
   this.AV12OpcaoClassificacaoEstDescricao = "" ;
   this.Events = {"e12or2_client": ["ENTER", true] ,"e13or2_client": ["'FECHAR'", true] ,"e15or2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV11OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'AV12OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'}],[{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV12OpcaoClassificacaoEstDescricao',fld:'vOPCAOCLASSIFICACAOESTDESCRICAO'},{av:'AV11OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalcadastramarca());
