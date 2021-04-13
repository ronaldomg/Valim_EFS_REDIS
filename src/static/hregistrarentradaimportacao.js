/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:46:20.41
*/
gx.evt.autoSkip = false;
gx.define('hregistrarentradaimportacao', false, function () {
   this.ServerClass =  "hregistrarentradaimportacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV19EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID") ;
      this.AV16EntradaId=gx.fn.getIntegerValue("vENTRADAID",'.') ;
      this.AV17EntradaImportacaoSeq=gx.fn.getIntegerValue("vENTRADAIMPORTACAOSEQ",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.s132_client=function()
   {
      this.AV15SnErro =  "N"  ;
      if ( (""==this.AV7EntradaImportacaoTpDeclaracao) )
      {
         this.addMessage("Informe o Tipo de Declaração");
         gx.fn.usrSetFocus("vENTRADAIMPORTACAOTPDECLARACAO") ;
         this.AV15SnErro =  "S"  ;
      }
      else
      {
         if ( (""==this.AV8EntradaImportacaoNoDocumento) )
         {
            this.addMessage("Informe o Número do Documento");
            gx.fn.usrSetFocus("vENTRADAIMPORTACAONODOCUMENTO") ;
            this.AV15SnErro =  "S"  ;
         }
      }
   };
   this.e11u42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13u42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16u42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,12,16,18,22,24,28,30,34,36,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK206", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIMPORTACAOTPDECLARACAO",gxz:"ZV7EntradaImportacaoTpDeclaracao",gxold:"OV7EntradaImportacaoTpDeclaracao",gxvar:"AV7EntradaImportacaoTpDeclaracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7EntradaImportacaoTpDeclaracao=Value},v2z:function(Value){gx.O.ZV7EntradaImportacaoTpDeclaracao=Value},v2c:function(){gx.fn.setComboBoxValue("vENTRADAIMPORTACAOTPDECLARACAO",gx.O.AV7EntradaImportacaoTpDeclaracao)},c2v:function(){gx.O.AV7EntradaImportacaoTpDeclaracao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAIMPORTACAOTPDECLARACAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK207", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIMPORTACAONODOCUMENTO",gxz:"ZV8EntradaImportacaoNoDocumento",gxold:"OV8EntradaImportacaoNoDocumento",gxvar:"AV8EntradaImportacaoNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8EntradaImportacaoNoDocumento=Value},v2z:function(Value){gx.O.ZV8EntradaImportacaoNoDocumento=Value},v2c:function(){gx.fn.setControlValue("vENTRADAIMPORTACAONODOCUMENTO",gx.O.AV8EntradaImportacaoNoDocumento,0)},c2v:function(){gx.O.AV8EntradaImportacaoNoDocumento=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAIMPORTACAONODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK208", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIMPORTACAOVALORPIS",gxz:"ZV9EntradaImportacaoValorPIS",gxold:"OV9EntradaImportacaoValorPIS",gxvar:"AV9EntradaImportacaoValorPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EntradaImportacaoValorPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9EntradaImportacaoValorPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAIMPORTACAOVALORPIS",gx.O.AV9EntradaImportacaoValorPIS,2,',')},c2v:function(){gx.O.AV9EntradaImportacaoValorPIS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAIMPORTACAOVALORPIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK209", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIMPORTACAOVALORCOFINS",gxz:"ZV10EntradaImportacaoValorCOFINS",gxold:"OV10EntradaImportacaoValorCOFINS",gxvar:"AV10EntradaImportacaoValorCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EntradaImportacaoValorCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10EntradaImportacaoValorCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAIMPORTACAOVALORCOFINS",gx.O.AV10EntradaImportacaoValorCOFINS,2,',')},c2v:function(){gx.O.AV10EntradaImportacaoValorCOFINS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAIMPORTACAOVALORCOFINS",'.',',')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK210", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIMPORTACAONODRAWBACK",gxz:"ZV11EntradaImportacaoNoDrawBack",gxold:"OV11EntradaImportacaoNoDrawBack",gxvar:"AV11EntradaImportacaoNoDrawBack",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11EntradaImportacaoNoDrawBack=Value},v2z:function(Value){gx.O.ZV11EntradaImportacaoNoDrawBack=Value},v2c:function(){gx.fn.setControlValue("vENTRADAIMPORTACAONODRAWBACK",gx.O.AV11EntradaImportacaoNoDrawBack,0)},c2v:function(){gx.O.AV11EntradaImportacaoNoDrawBack=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAIMPORTACAONODRAWBACK")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"JAVASCRIPT", format:2,grid:0};
   this.AV7EntradaImportacaoTpDeclaracao = "" ;
   this.ZV7EntradaImportacaoTpDeclaracao = "" ;
   this.OV7EntradaImportacaoTpDeclaracao = "" ;
   this.AV8EntradaImportacaoNoDocumento = "" ;
   this.ZV8EntradaImportacaoNoDocumento = "" ;
   this.OV8EntradaImportacaoNoDocumento = "" ;
   this.AV9EntradaImportacaoValorPIS = 0 ;
   this.ZV9EntradaImportacaoValorPIS = 0 ;
   this.OV9EntradaImportacaoValorPIS = 0 ;
   this.AV10EntradaImportacaoValorCOFINS = 0 ;
   this.ZV10EntradaImportacaoValorCOFINS = 0 ;
   this.OV10EntradaImportacaoValorCOFINS = 0 ;
   this.AV11EntradaImportacaoNoDrawBack = "" ;
   this.ZV11EntradaImportacaoNoDrawBack = "" ;
   this.OV11EntradaImportacaoNoDrawBack = "" ;
   this.AV7EntradaImportacaoTpDeclaracao = "" ;
   this.AV8EntradaImportacaoNoDocumento = "" ;
   this.AV9EntradaImportacaoValorPIS = 0 ;
   this.AV10EntradaImportacaoValorCOFINS = 0 ;
   this.AV11EntradaImportacaoNoDrawBack = "" ;
   this.AV19EntradaEmpresaId = "" ;
   this.AV16EntradaId = 0 ;
   this.AV17EntradaImportacaoSeq = 0 ;
   this.A5258EntradaImportacaoSeq = 0 ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A5259EntradaImportacaoTpDeclaracao = "" ;
   this.A5260EntradaImportacaoNoDocumento = "" ;
   this.A5261EntradaImportacaoValorPIS = 0 ;
   this.A5262EntradaImportacaoValorCOFINS = 0 ;
   this.A5263EntradaImportacaoNoDrawBack = "" ;
   this.Gx_mode = "" ;
   this.AV15SnErro = "" ;
   this.Events = {"e11u42_client": ["'FECHAR'", true] ,"e13u42_client": ["ENTER", true] ,"e16u42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',hsh:true}],[{av:'gx.fn.getCtrlProperty("vENTRADAIMPORTACAONODOCUMENTO","Enabled")',ctrl:'vENTRADAIMPORTACAONODOCUMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAIMPORTACAOVALORPIS","Enabled")',ctrl:'vENTRADAIMPORTACAOVALORPIS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAIMPORTACAOVALORCOFINS","Enabled")',ctrl:'vENTRADAIMPORTACAOVALORCOFINS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENTRADAIMPORTACAONODRAWBACK","Enabled")',ctrl:'vENTRADAIMPORTACAONODRAWBACK',prop:'Enabled'},{ctrl:'vENTRADAIMPORTACAOTPDECLARACAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20SnOk',fld:'vSNOK'},{av:'AV17EntradaImportacaoSeq',fld:'vENTRADAIMPORTACAOSEQ'}],[{av:'AV20SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV19EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV16EntradaId',fld:'vENTRADAID',hsh:true},{av:'AV17EntradaImportacaoSeq',fld:'vENTRADAIMPORTACAOSEQ'},{av:'AV7EntradaImportacaoTpDeclaracao',fld:'vENTRADAIMPORTACAOTPDECLARACAO'},{av:'AV8EntradaImportacaoNoDocumento',fld:'vENTRADAIMPORTACAONODOCUMENTO'},{av:'AV9EntradaImportacaoValorPIS',fld:'vENTRADAIMPORTACAOVALORPIS'},{av:'AV10EntradaImportacaoValorCOFINS',fld:'vENTRADAIMPORTACAOVALORCOFINS'},{av:'AV11EntradaImportacaoNoDrawBack',fld:'vENTRADAIMPORTACAONODRAWBACK'},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV20SnOk',fld:'vSNOK'}],[{av:'AV17EntradaImportacaoSeq',fld:'vENTRADAIMPORTACAOSEQ'},{av:'AV20SnOk',fld:'vSNOK'},{av:'AV15SnErro',fld:'vSNERRO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV19EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV16EntradaId", "vENTRADAID", 0, "int");
   this.setVCMap("AV17EntradaImportacaoSeq", "vENTRADAIMPORTACAOSEQ", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarentradaimportacao());
