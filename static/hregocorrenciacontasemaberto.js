/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:46:19.6
*/
gx.evt.autoSkip = false;
gx.define('hregocorrenciacontasemaberto', false, function () {
   this.ServerClass =  "hregocorrenciacontasemaberto" ;
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
      this.AV26ConsiderarParametros=gx.fn.getControlValue("vCONSIDERARPARAMETROS") ;
   };
   this.Validv_Ocorrenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ocorrenciaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121gd2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131gd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151gd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,28,31,33,39,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[2]={fld:"TABHAVER",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV14PessoaId",gxold:"OV14PessoaId",gxvar:"AV14PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV14PessoaId,0)},c2v:function(){gx.O.AV14PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV15PessoaFantasia",gxold:"OV15PessoaFantasia",gxvar:"AV15PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaFantasia=Value},v2z:function(Value){gx.O.ZV15PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV15PessoaFantasia,0)},c2v:function(){gx.O.AV15PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTREFERE",gxz:"ZV21DtRefere",gxold:"OV21DtRefere",gxvar:"AV21DtRefere",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DtRefere=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DtRefere=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTREFERE",gx.O.AV21DtRefere,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DtRefere=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTREFERE")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TXT", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaid,isvalid:null,rgrid:[],fld:"vOCORRENCIAID",gxz:"ZV22OcorrenciaId",gxold:"OV22OcorrenciaId",gxvar:"AV22OcorrenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22OcorrenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22OcorrenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAID",gx.O.AV22OcorrenciaId,0)},c2v:function(){gx.O.AV22OcorrenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOCORRENCIADESCRICAO",gxz:"ZV23OcorrenciaDescricao",gxold:"OV23OcorrenciaDescricao",gxvar:"AV23OcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OcorrenciaDescricao=Value},v2z:function(Value){gx.O.ZV23OcorrenciaDescricao=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIADESCRICAO",gx.O.AV23OcorrenciaDescricao,0)},c2v:function(){gx.O.AV23OcorrenciaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV24Observacao",gxold:"OV24Observacao",gxvar:"AV24Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Observacao=Value},v2z:function(Value){gx.O.ZV24Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV24Observacao,0)},c2v:function(){gx.O.AV24Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"JS", format:2,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaempresaid,isvalid:null,rgrid:[],fld:"vOCORRENCIAEMPRESAID",gxz:"ZV27OcorrenciaEmpresaId",gxold:"OV27OcorrenciaEmpresaId",gxvar:"AV27OcorrenciaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27OcorrenciaEmpresaId=Value},v2z:function(Value){gx.O.ZV27OcorrenciaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIAEMPRESAID",gx.O.AV27OcorrenciaEmpresaId,0)},c2v:function(){gx.O.AV27OcorrenciaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"PROMPT_OCORRENCIAID",grid:0};
   this.AV14PessoaId = 0 ;
   this.ZV14PessoaId = 0 ;
   this.OV14PessoaId = 0 ;
   this.AV15PessoaFantasia = "" ;
   this.ZV15PessoaFantasia = "" ;
   this.OV15PessoaFantasia = "" ;
   this.AV21DtRefere = gx.date.nullDate() ;
   this.ZV21DtRefere = gx.date.nullDate() ;
   this.OV21DtRefere = gx.date.nullDate() ;
   this.AV22OcorrenciaId = 0 ;
   this.ZV22OcorrenciaId = 0 ;
   this.OV22OcorrenciaId = 0 ;
   this.AV23OcorrenciaDescricao = "" ;
   this.ZV23OcorrenciaDescricao = "" ;
   this.OV23OcorrenciaDescricao = "" ;
   this.AV24Observacao = "" ;
   this.ZV24Observacao = "" ;
   this.OV24Observacao = "" ;
   this.AV27OcorrenciaEmpresaId = "" ;
   this.ZV27OcorrenciaEmpresaId = "" ;
   this.OV27OcorrenciaEmpresaId = "" ;
   this.AV14PessoaId = 0 ;
   this.AV15PessoaFantasia = "" ;
   this.AV21DtRefere = gx.date.nullDate() ;
   this.AV22OcorrenciaId = 0 ;
   this.AV23OcorrenciaDescricao = "" ;
   this.AV24Observacao = "" ;
   this.AV27OcorrenciaEmpresaId = "" ;
   this.AV26ConsiderarParametros = "" ;
   this.A973Ocorrenciaid = 0 ;
   this.A972OcorrenciaEmpresaId = "" ;
   this.A974OcorrenciaDescricao = "" ;
   this.Events = {"e121gd2_client": ["ENTER", true] ,"e131gd2_client": ["'FECHAR'", true] ,"e151gd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV25TpErro',fld:'vTPERRO'},{av:'AV21DtRefere',fld:'vDTREFERE'},{av:'AV22OcorrenciaId',fld:'vOCORRENCIAID'},{av:'A972OcorrenciaEmpresaId',fld:'OCORRENCIAEMPRESAID'},{av:'AV27OcorrenciaEmpresaId',fld:'vOCORRENCIAEMPRESAID'},{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV24Observacao',fld:'vOBSERVACAO'},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV34ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV35UsrCod',fld:'vUSRCOD'}],[{av:'AV25TpErro',fld:'vTPERRO'},{av:'AV40GXLvl48',fld:'vGXLVL48'},{av:'AV37DataHora',fld:'vDATAHORA'},{av:'AV24Observacao',fld:'vOBSERVACAO'},{av:'AV18SdtCli',fld:'vSDTCLI'},{av:'AV41GXV1',fld:'vGXV1'},{av:'AV20sdtCliItem',fld:'vSDTCLIITEM'},{av:'AV42GXV2',fld:'vGXV2'},{av:'AV19SdtContasItem',fld:'vSDTCONTASITEM'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_OCORRENCIAID", [27]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV26ConsiderarParametros", "vCONSIDERARPARAMETROS", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregocorrenciacontasemaberto());
