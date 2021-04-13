/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:40.79
*/
gx.evt.autoSkip = false;
gx.define('hcopiarcodigos', false, function () {
   this.ServerClass =  "hcopiarcodigos" ;
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
      this.AV22TipoClassFluxoId=gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.') ;
      this.AV20ClassFluxoId=gx.fn.getControlValue("vCLASSFLUXOID") ;
      this.AV21ClassFluxoSelecaoSeq=gx.fn.getIntegerValue("vCLASSFLUXOSELECAOSEQ",'.') ;
      this.AV5ClassFluxoSelecaoTipo=gx.fn.getControlValue("vCLASSFLUXOSELECAOTIPO") ;
   };
   this.s112_client=function()
   {
      this.AV16SnErro =  "N"  ;
      if ( this.AV5ClassFluxoSelecaoTipo == "P" )
      {
         if ( this.AV17SnInclusao == "N" && this.AV11SnAcrescimo == "N" && this.AV15SnDesconto == "N" && this.AV12SnBaixa == "N" )
         {
            this.addMessage("Informe um tipo de lançamento para o registro");
            gx.fn.usrSetFocus("vSNINCLUSAO") ;
            this.AV16SnErro =  "S"  ;
         }
      }
      else
      {
         if ( this.AV13SnCredito == "N" && this.AV14SnDebito == "N" )
         {
            this.addMessage("Informe um tipo de histório para o registro");
            gx.fn.usrSetFocus("vSNDEBITO") ;
            this.AV16SnErro =  "S"  ;
         }
      }
   };
   this.e122682_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132682_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162682_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,22,26,30,33,36,39,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLANCMTOS",grid:0};
   GXValidFnc[9]={fld:"TABLE5",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPGARRECEBER",gxz:"ZV9PgarReceber",gxold:"OV9PgarReceber",gxvar:"AV9PgarReceber",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9PgarReceber=Value},v2z:function(Value){gx.O.ZV9PgarReceber=Value},v2c:function(){gx.fn.setComboBoxValue("vPGARRECEBER",gx.O.AV9PgarReceber)},c2v:function(){gx.O.AV9PgarReceber=this.val()},val:function(){return gx.fn.getControlValue("vPGARRECEBER")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINCLUSAO",gxz:"ZV17SnInclusao",gxold:"OV17SnInclusao",gxvar:"AV17SnInclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17SnInclusao=Value},v2z:function(Value){gx.O.ZV17SnInclusao=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNINCLUSAO",gx.O.AV17SnInclusao,"S")},c2v:function(){gx.O.AV17SnInclusao=this.val()},val:function(){return gx.fn.getControlValue("vSNINCLUSAO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNBAIXA",gxz:"ZV12SnBaixa",gxold:"OV12SnBaixa",gxvar:"AV12SnBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV12SnBaixa=Value},v2z:function(Value){gx.O.ZV12SnBaixa=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNBAIXA",gx.O.AV12SnBaixa,"S")},c2v:function(){gx.O.AV12SnBaixa=this.val()},val:function(){return gx.fn.getControlValue("vSNBAIXA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNACRESCIMO",gxz:"ZV11SnAcrescimo",gxold:"OV11SnAcrescimo",gxvar:"AV11SnAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11SnAcrescimo=Value},v2z:function(Value){gx.O.ZV11SnAcrescimo=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNACRESCIMO",gx.O.AV11SnAcrescimo,"S")},c2v:function(){gx.O.AV11SnAcrescimo=this.val()},val:function(){return gx.fn.getControlValue("vSNACRESCIMO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDESCONTO",gxz:"ZV15SnDesconto",gxold:"OV15SnDesconto",gxvar:"AV15SnDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15SnDesconto=Value},v2z:function(Value){gx.O.ZV15SnDesconto=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDESCONTO",gx.O.AV15SnDesconto,"S")},c2v:function(){gx.O.AV15SnDesconto=this.val()},val:function(){return gx.fn.getControlValue("vSNDESCONTO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={fld:"TABHISTORICO",grid:0};
   GXValidFnc[36]={fld:"TABLE6",grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDEBITO",gxz:"ZV14SnDebito",gxold:"OV14SnDebito",gxvar:"AV14SnDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14SnDebito=Value},v2z:function(Value){gx.O.ZV14SnDebito=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDEBITO",gx.O.AV14SnDebito,"S")},c2v:function(){gx.O.AV14SnDebito=this.val()},val:function(){return gx.fn.getControlValue("vSNDEBITO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCREDITO",gxz:"ZV13SnCredito",gxold:"OV13SnCredito",gxvar:"AV13SnCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV13SnCredito=Value},v2z:function(Value){gx.O.ZV13SnCredito=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNCREDITO",gx.O.AV13SnCredito,"S")},c2v:function(){gx.O.AV13SnCredito=this.val()},val:function(){return gx.fn.getControlValue("vSNCREDITO")},nac:gx.falseFn,values:['S','N']};
   this.AV9PgarReceber = "" ;
   this.ZV9PgarReceber = "" ;
   this.OV9PgarReceber = "" ;
   this.AV17SnInclusao = "" ;
   this.ZV17SnInclusao = "" ;
   this.OV17SnInclusao = "" ;
   this.AV12SnBaixa = "" ;
   this.ZV12SnBaixa = "" ;
   this.OV12SnBaixa = "" ;
   this.AV11SnAcrescimo = "" ;
   this.ZV11SnAcrescimo = "" ;
   this.OV11SnAcrescimo = "" ;
   this.AV15SnDesconto = "" ;
   this.ZV15SnDesconto = "" ;
   this.OV15SnDesconto = "" ;
   this.AV14SnDebito = "" ;
   this.ZV14SnDebito = "" ;
   this.OV14SnDebito = "" ;
   this.AV13SnCredito = "" ;
   this.ZV13SnCredito = "" ;
   this.OV13SnCredito = "" ;
   this.AV9PgarReceber = "" ;
   this.AV17SnInclusao = "" ;
   this.AV12SnBaixa = "" ;
   this.AV11SnAcrescimo = "" ;
   this.AV15SnDesconto = "" ;
   this.AV14SnDebito = "" ;
   this.AV13SnCredito = "" ;
   this.AV22TipoClassFluxoId = 0 ;
   this.AV20ClassFluxoId = "" ;
   this.AV21ClassFluxoSelecaoSeq = 0 ;
   this.AV5ClassFluxoSelecaoTipo = "" ;
   this.AV16SnErro = "" ;
   this.Events = {"e122682_client": ["ENTER", true] ,"e132682_client": ["'FECHAR'", true] ,"e162682_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV5ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO',hsh:true}],[{av:'gx.fn.getCtrlProperty("TABLANCMTOS","Visible")',ctrl:'TABLANCMTOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABHISTORICO","Visible")',ctrl:'TABHISTORICO',prop:'Visible'},{ctrl:'FORM',prop:'Caption'}]];
   this.EvtParms["ENTER"] = [[{av:'AV16SnErro',fld:'vSNERRO'},{av:'AV22TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID',hsh:true},{av:'AV20ClassFluxoId',fld:'vCLASSFLUXOID',hsh:true},{av:'AV21ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ',hsh:true},{av:'AV5ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO',hsh:true},{av:'AV9PgarReceber',fld:'vPGARRECEBER'},{av:'AV17SnInclusao',fld:'vSNINCLUSAO'},{av:'AV11SnAcrescimo',fld:'vSNACRESCIMO'},{av:'AV15SnDesconto',fld:'vSNDESCONTO'},{av:'AV12SnBaixa',fld:'vSNBAIXA'},{av:'AV14SnDebito',fld:'vSNDEBITO'},{av:'AV13SnCredito',fld:'vSNCREDITO'}],[{av:'AV16SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22TipoClassFluxoId", "vTIPOCLASSFLUXOID", 0, "int");
   this.setVCMap("AV20ClassFluxoId", "vCLASSFLUXOID", 0, "svchar");
   this.setVCMap("AV21ClassFluxoSelecaoSeq", "vCLASSFLUXOSELECAOSEQ", 0, "int");
   this.setVCMap("AV5ClassFluxoSelecaoTipo", "vCLASSFLUXOSELECAOTIPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcopiarcodigos());
