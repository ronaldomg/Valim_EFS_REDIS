/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:51:28.22
*/
gx.evt.autoSkip = false;
gx.define('hvisitaclienteadiarvisita', false, function () {
   this.ServerClass =  "hvisitaclienteadiarvisita" ;
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
      this.Gx_date=gx.fn.getDateValue("vTODAY") ;
      this.AV6AparelhoId=gx.fn.getIntegerValue("vAPARELHOID",'.') ;
      this.AV14AparelhoEmpresaId=gx.fn.getControlValue("vAPARELHOEMPRESAID") ;
      this.AV8PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV7EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV5AparelhoClienteSeqId=gx.fn.getIntegerValue("vAPARELHOCLIENTESEQID",'.') ;
      this.AV9VisitaClienteDataAgenda=gx.fn.getDateValue("vVISITACLIENTEDATAAGENDA") ;
   };
   this.e151yz1_client=function()
   {
      this.clearMessages();
      if ( this.AV11SNLigarNovamente == "N" )
      {
         gx.fn.setCtrlProperty("vQTDDIASNOVALIGACAO","Enabled", 0 );
         gx.fn.setCtrlProperty("vDATANOVALIGACAO","Enabled", 0 );
      }
      else
      {
         gx.fn.setCtrlProperty("vQTDDIASNOVALIGACAO","Enabled", 1 );
         gx.fn.setCtrlProperty("vDATANOVALIGACAO","Enabled", 1 );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("vQTDDIASNOVALIGACAO","Enabled")',ctrl:'vQTDDIASNOVALIGACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATANOVALIGACAO","Enabled")',ctrl:'vDATANOVALIGACAO',prop:'Enabled'}]);
   };
   this.e161yz1_client=function()
   {
      this.clearMessages();
      if ( ! (0==this.AV10QtdDiasNovaLigacao) )
      {
         this.AV15DataNovaLigacao =  gx.date.dtadd( this.Gx_date, 86400*(this.AV10QtdDiasNovaLigacao))  ;
      }
      this.refreshOutputs([{av:'AV15DataNovaLigacao',fld:'vDATANOVALIGACAO'}]);
   };
   this.e171yz1_client=function()
   {
      this.clearMessages();
      if ( ! (new gx.date.gxdate("").compare(this.AV15DataNovaLigacao)==0) )
      {
         this.AV10QtdDiasNovaLigacao = gx.num.trunc( gx.date.daysDiff( this.AV15DataNovaLigacao , this.Gx_date ) ,0) ;
      }
      this.refreshOutputs([{av:'AV10QtdDiasNovaLigacao',fld:'vQTDDIASNOVALIGACAO'}]);
   };
   this.e121yz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131yz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e181yz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,17,28];
   this.GXLastCtrlId =28;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e161yz1_client',rgrid:[],fld:"vQTDDIASNOVALIGACAO",gxz:"ZV10QtdDiasNovaLigacao",gxold:"OV10QtdDiasNovaLigacao",gxvar:"AV10QtdDiasNovaLigacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10QtdDiasNovaLigacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10QtdDiasNovaLigacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDDIASNOVALIGACAO",gx.O.AV10QtdDiasNovaLigacao,0)},c2v:function(){gx.O.AV10QtdDiasNovaLigacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDDIASNOVALIGACAO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e151yz1_client',rgrid:[],fld:"vSNLIGARNOVAMENTE",gxz:"ZV11SNLigarNovamente",gxold:"OV11SNLigarNovamente",gxvar:"AV11SNLigarNovamente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11SNLigarNovamente=Value},v2z:function(Value){gx.O.ZV11SNLigarNovamente=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNLIGARNOVAMENTE",gx.O.AV11SNLigarNovamente,"N");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11SNLigarNovamente=this.val()},val:function(){return gx.fn.getControlValue("vSNLIGARNOVAMENTE")},nac:gx.falseFn,values:['N','S']};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[17]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e171yz1_client',rgrid:[],fld:"vDATANOVALIGACAO",gxz:"ZV15DataNovaLigacao",gxold:"OV15DataNovaLigacao",gxvar:"AV15DataNovaLigacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataNovaLigacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataNovaLigacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATANOVALIGACAO",gx.O.AV15DataNovaLigacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataNovaLigacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATANOVALIGACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[28]={fld:"JS", format:2,grid:0};
   this.AV10QtdDiasNovaLigacao = 0 ;
   this.ZV10QtdDiasNovaLigacao = 0 ;
   this.OV10QtdDiasNovaLigacao = 0 ;
   this.AV11SNLigarNovamente = "" ;
   this.ZV11SNLigarNovamente = "" ;
   this.OV11SNLigarNovamente = "" ;
   this.AV15DataNovaLigacao = gx.date.nullDate() ;
   this.ZV15DataNovaLigacao = gx.date.nullDate() ;
   this.OV15DataNovaLigacao = gx.date.nullDate() ;
   this.AV10QtdDiasNovaLigacao = 0 ;
   this.AV11SNLigarNovamente = "" ;
   this.AV15DataNovaLigacao = gx.date.nullDate() ;
   this.AV6AparelhoId = 0 ;
   this.AV14AparelhoEmpresaId = "" ;
   this.AV8PessoaId = 0 ;
   this.AV7EmpresaPessoasEmpresaId = "" ;
   this.AV5AparelhoClienteSeqId = 0 ;
   this.AV9VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.Events = {"e121yz2_client": ["ENTER", true] ,"e131yz2_client": ["'FECHAR'", true] ,"e181yz2_client": ["CANCEL", true] ,"e151yz1_client": ["VSNLIGARNOVAMENTE.ISVALID", false] ,"e161yz1_client": ["VQTDDIASNOVALIGACAO.ISVALID", false] ,"e171yz1_client": ["VDATANOVALIGACAO.ISVALID", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10QtdDiasNovaLigacao',fld:'vQTDDIASNOVALIGACAO'},{av:'AV11SNLigarNovamente',fld:'vSNLIGARNOVAMENTE'},{av:'AV5AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID',hsh:true},{av:'AV6AparelhoId',fld:'vAPARELHOID',hsh:true},{av:'AV8PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV15DataNovaLigacao',fld:'vDATANOVALIGACAO'}],[{av:'gx.fn.getCtrlProperty("vQTDDIASNOVALIGACAO","Enabled")',ctrl:'vQTDDIASNOVALIGACAO',prop:'Enabled'},{av:'AV12SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV13MsgErro',fld:'vMSGERRO'}]];
   this.EvtParms["VSNLIGARNOVAMENTE.ISVALID"] = [[{av:'AV11SNLigarNovamente',fld:'vSNLIGARNOVAMENTE'}],[{av:'gx.fn.getCtrlProperty("vQTDDIASNOVALIGACAO","Enabled")',ctrl:'vQTDDIASNOVALIGACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATANOVALIGACAO","Enabled")',ctrl:'vDATANOVALIGACAO',prop:'Enabled'}]];
   this.EvtParms["VQTDDIASNOVALIGACAO.ISVALID"] = [[{av:'AV10QtdDiasNovaLigacao',fld:'vQTDDIASNOVALIGACAO'},{av:'Gx_date',fld:'vTODAY'}],[{av:'AV15DataNovaLigacao',fld:'vDATANOVALIGACAO'}]];
   this.EvtParms["VDATANOVALIGACAO.ISVALID"] = [[{av:'AV15DataNovaLigacao',fld:'vDATANOVALIGACAO'},{av:'Gx_date',fld:'vTODAY'}],[{av:'AV10QtdDiasNovaLigacao',fld:'vQTDDIASNOVALIGACAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_date", "vTODAY", 0, "date");
   this.setVCMap("AV6AparelhoId", "vAPARELHOID", 0, "int");
   this.setVCMap("AV14AparelhoEmpresaId", "vAPARELHOEMPRESAID", 0, "char");
   this.setVCMap("AV8PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV7EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV5AparelhoClienteSeqId", "vAPARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("AV9VisitaClienteDataAgenda", "vVISITACLIENTEDATAAGENDA", 0, "date");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisitaclienteadiarvisita());
