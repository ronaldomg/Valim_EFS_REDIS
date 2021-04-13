/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:20:46.79
*/
gx.evt.autoSkip = false;
gx.define('hfaturarsempedidoparm', false, function () {
   this.ServerClass =  "hfaturarsempedidoparm" ;
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
      this.AV6EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
   };
   this.Validv_Transacaopagrectipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSACAOPAGRECTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e152h81_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalobsparms",[this.AV6EmpresaLogadaId, "EST", "TRNNOTASERV"]), []);
      this.refreshOutputs([]);
   };
   this.e122h82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132h82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162h82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,16,22,24,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECCODIGO",gxz:"ZV15TransacaoPagRecCodigo",gxold:"OV15TransacaoPagRecCodigo",gxvar:"AV15TransacaoPagRecCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TransacaoPagRecCodigo=Value},v2z:function(Value){gx.O.ZV15TransacaoPagRecCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOPAGRECCODIGO",gx.O.AV15TransacaoPagRecCodigo,0)},c2v:function(){gx.O.AV15TransacaoPagRecCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECCODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transacaopagrectipo,isvalid:null,rgrid:[],fld:"vTRANSACAOPAGRECTIPO",gxz:"ZV17TransacaoPagRecTipo",gxold:"OV17TransacaoPagRecTipo",gxvar:"AV17TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.ZV17TransacaoPagRecTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOPAGRECTIPO",gx.O.AV17TransacaoPagRecTipo)},c2v:function(){gx.O.AV17TransacaoPagRecTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOPAGRECTIPO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"BTNOBS",grid:0};
   GXValidFnc[25]={fld:"PROMPT_TRANSACAOPAGRECCODIGO",grid:0};
   this.AV15TransacaoPagRecCodigo = "" ;
   this.ZV15TransacaoPagRecCodigo = "" ;
   this.OV15TransacaoPagRecCodigo = "" ;
   this.AV17TransacaoPagRecTipo = "" ;
   this.ZV17TransacaoPagRecTipo = "" ;
   this.OV17TransacaoPagRecTipo = "" ;
   this.AV15TransacaoPagRecCodigo = "" ;
   this.AV17TransacaoPagRecTipo = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.AV6EmpresaLogadaId = "" ;
   this.Events = {"e122h82_client": ["ENTER", true] ,"e132h82_client": ["'FECHAR'", true] ,"e162h82_client": ["CANCEL", true] ,"e152h81_client": ["'OBSERVACAO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV15TransacaoPagRecCodigo',fld:'vTRANSACAOPAGRECCODIGO'},{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'AV16TransacaoPagRecEmpresaId',fld:'vTRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'},{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV13tpErro',fld:'vTPERRO'},{av:'AV20GXLvl29',fld:'vGXLVL29'},{av:'AV15TransacaoPagRecCodigo',fld:'vTRANSACAOPAGRECCODIGO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'OBSERVACAO'"] = [[{av:'AV6EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[]];
   this.setPrompt("PROMPT_TRANSACAOPAGRECCODIGO", [10]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfaturarsempedidoparm());
