/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:56.62
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidajustificativa', false, function () {
   this.ServerClass =  "hregistrarsaidajustificativa" ;
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
      this.AV15TextoDigitadoAux=gx.fn.getControlValue("vTEXTODIGITADOAUX") ;
   };
   this.s112_client=function()
   {
      this.AV16SnErro =  "N"  ;
      if ( (""==this.AV13TextoDigitado) && this.AV16SnErro == "N" )
      {
         this.addMessage("O campo não pode ser vazio");
         gx.fn.usrSetFocus("vTEXTODIGITADO") ;
         this.AV16SnErro =  "S"  ;
      }
      else
      {
         if ( gx.text.length( this.AV13TextoDigitado) < 15 )
         {
            this.addMessage("O campo deve ter no mínimo 15 caracteres");
            gx.fn.usrSetFocus("vTEXTODIGITADO") ;
            this.AV16SnErro =  "S"  ;
         }
      }
   };
   this.e1212n2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1312n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1512n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6];
   this.GXLastCtrlId =6;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTODIGITADO",gxz:"ZV13TextoDigitado",gxold:"OV13TextoDigitado",gxvar:"AV13TextoDigitado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TextoDigitado=Value},v2z:function(Value){gx.O.ZV13TextoDigitado=Value},v2c:function(){gx.fn.setControlValue("vTEXTODIGITADO",gx.O.AV13TextoDigitado,0)},c2v:function(){gx.O.AV13TextoDigitado=this.val()},val:function(){return gx.fn.getControlValue("vTEXTODIGITADO")},nac:gx.falseFn};
   this.AV13TextoDigitado = "" ;
   this.ZV13TextoDigitado = "" ;
   this.OV13TextoDigitado = "" ;
   this.AV13TextoDigitado = "" ;
   this.AV15TextoDigitadoAux = "" ;
   this.AV16SnErro = "" ;
   this.Events = {"e1212n2_client": ["ENTER", true] ,"e1312n2_client": ["'FECHAR'", true] ,"e1512n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV16SnErro',fld:'vSNERRO'},{av:'AV13TextoDigitado',fld:'vTEXTODIGITADO'},{av:'AV18SnOk',fld:'vSNOK'},{av:'AV15TextoDigitadoAux',fld:'vTEXTODIGITADOAUX'}],[{av:'AV18SnOk',fld:'vSNOK'},{av:'AV16SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18SnOk',fld:'vSNOK'},{av:'AV13TextoDigitado',fld:'vTEXTODIGITADO'},{av:'AV15TextoDigitadoAux',fld:'vTEXTODIGITADOAUX'}],[{av:'AV18SnOk',fld:'vSNOK'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15TextoDigitadoAux", "vTEXTODIGITADOAUX", 0, "vchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidajustificativa());
