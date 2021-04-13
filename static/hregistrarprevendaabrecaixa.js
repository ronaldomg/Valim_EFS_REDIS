/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:33:32.26
*/
gx.evt.autoSkip = false;
gx.define('hregistrarprevendaabrecaixa', false, function () {
   this.ServerClass =  "hregistrarprevendaabrecaixa" ;
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
      this.AV13UsuarioId=gx.fn.getControlValue("vUSUARIOID") ;
      this.AV14SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
   };
   this.e12yv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13yv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16yv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,21,29];
   this.GXLastCtrlId =29;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV19UsuarioNome",gxold:"OV19UsuarioNome",gxvar:"AV19UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19UsuarioNome=Value},v2z:function(Value){gx.O.ZV19UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV19UsuarioNome,0)},c2v:function(){gx.O.AV19UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORABERTURA",gxz:"ZV18ValorAbertura",gxold:"OV18ValorAbertura",gxvar:"AV18ValorAbertura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ValorAbertura=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV18ValorAbertura=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORABERTURA",gx.O.AV18ValorAbertura,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18ValorAbertura=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORABERTURA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSRSNH",gxz:"ZV16UsrSnh",gxold:"OV16UsrSnh",gxvar:"AV16UsrSnh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16UsrSnh=Value},v2z:function(Value){gx.O.ZV16UsrSnh=Value},v2c:function(){gx.fn.setControlValue("vUSRSNH",gx.O.AV16UsrSnh,0)},c2v:function(){gx.O.AV16UsrSnh=this.val()},val:function(){return gx.fn.getControlValue("vUSRSNH")},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTENTATIVAS",gxz:"ZV20NoTentativas",gxold:"OV20NoTentativas",gxvar:"AV20NoTentativas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20NoTentativas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20NoTentativas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOTENTATIVAS",gx.O.AV20NoTentativas,0)},c2v:function(){gx.O.AV20NoTentativas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTENTATIVAS",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"JSVAL", format:2,grid:0};
   this.AV19UsuarioNome = "" ;
   this.ZV19UsuarioNome = "" ;
   this.OV19UsuarioNome = "" ;
   this.AV18ValorAbertura = 0 ;
   this.ZV18ValorAbertura = 0 ;
   this.OV18ValorAbertura = 0 ;
   this.AV16UsrSnh = "" ;
   this.ZV16UsrSnh = "" ;
   this.OV16UsrSnh = "" ;
   this.AV20NoTentativas = 0 ;
   this.ZV20NoTentativas = 0 ;
   this.OV20NoTentativas = 0 ;
   this.AV19UsuarioNome = "" ;
   this.AV18ValorAbertura = 0 ;
   this.AV16UsrSnh = "" ;
   this.AV20NoTentativas = 0 ;
   this.AV13UsuarioId = "" ;
   this.AV14SaidaId = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6005SaidaData = gx.date.nullDate() ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.Events = {"e12yv2_client": ["ENTER", true] ,"e13yv2_client": ["'FECHAR'", true] ,"e16yv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV39SnErro',fld:'vSNERRO'}],[{av:'AV38SnFecharRel',fld:'vSNFECHARREL'},{av:'AV39SnErro',fld:'vSNERRO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV14SaidaId',fld:'vSAIDAID',hsh:true},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV23SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A6005SaidaData',fld:'SAIDADATA'},{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV13UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV18ValorAbertura',fld:'vVALORABERTURA'},{av:'AV33SNIMPABRECAIXA',fld:'vSNIMPABRECAIXA'},{av:'AV16UsrSnh',fld:'vUSRSNH'},{av:'AV20NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV32NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV40QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV31NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35ParmRelat',fld:'vPARMRELAT'},{av:'AV24CaixaTrabalhoId',fld:'vCAIXATRABALHOID'}],[{av:'AV21DataAtual',fld:'vDATAATUAL'},{av:'AV32NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV31NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV17EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV40QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV24CaixaTrabalhoId',fld:'vCAIXATRABALHOID'},{av:'AV15TpErro',fld:'vTPERRO'},{av:'AV9MsgErro',fld:'vMSGERRO'},{av:'AV20NoTentativas',fld:'vNOTENTATIVAS'},{av:'AV16UsrSnh',fld:'vUSRSNH'},{av:'AV13UsuarioId',fld:'vUSUARIOID',hsh:true},{av:'AV35ParmRelat',fld:'vPARMRELAT'},{av:'AV36NomeProc',fld:'vNOMEPROC'},{av:'AV34Random',fld:'vRANDOM'},{av:'AV37NomeSessao',fld:'vNOMESESSAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39SnErro',fld:'vSNERRO'}],[{av:'AV39SnErro',fld:'vSNERRO'}]];
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV13UsuarioId", "vUSUARIOID", 0, "char");
   this.setVCMap("AV14SaidaId", "vSAIDAID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarprevendaabrecaixa());
