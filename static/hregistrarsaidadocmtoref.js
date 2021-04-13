/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:28.80
*/
gx.evt.autoSkip = false;
gx.define('hregistrarsaidadocmtoref', false, function () {
   this.ServerClass =  "hregistrarsaidadocmtoref" ;
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
      this.AV13SaidaEmpresaid=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV14SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV31SaidaDocumentoRefSequencia=gx.fn.getIntegerValue("vSAIDADOCUMENTOREFSEQUENCIA",'.') ;
      this.AV16Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Saidadocumentorefcoduf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSAIDADOCUMENTOREFCODUF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("TAB1","Visible", 0 );
      gx.fn.setCtrlProperty("TAB2","Visible", 0 );
      gx.fn.setCtrlProperty("TAB3","Visible", 0 );
      gx.fn.setCtrlProperty("TAB4","Visible", 0 );
      gx.fn.setCtrlProperty("TAB5","Visible", 0 );
      if ( this.AV30SaidaDocumentoRefModelocOD == "01" || this.AV30SaidaDocumentoRefModelocOD == "02" )
      {
         gx.fn.setCtrlProperty("TAB2","Visible", 1 );
         gx.fn.setCtrlProperty("TAB4","Visible", 1 );
      }
      else if ( this.AV30SaidaDocumentoRefModelocOD == "55" || this.AV30SaidaDocumentoRefModelocOD == "65" )
      {
         gx.fn.setCtrlProperty("TAB1","Visible", 1 );
      }
      else if ( this.AV30SaidaDocumentoRefModelocOD == "04" )
      {
         gx.fn.setCtrlProperty("TAB2","Visible", 1 );
         gx.fn.setCtrlProperty("TAB3","Visible", 1 );
         gx.fn.setCtrlProperty("TAB4","Visible", 1 );
      }
      else if ( this.AV30SaidaDocumentoRefModelocOD == "2B" || this.AV30SaidaDocumentoRefModelocOD == "2C" || this.AV30SaidaDocumentoRefModelocOD == "2D" )
      {
         gx.fn.setCtrlProperty("TAB5","Visible", 1 );
      }
   };
   this.s122_client=function()
   {
      if ( this.AV16Modo == "DLT" || this.AV16Modo == "DSP" )
      {
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFMODELOCOD","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCHAVE","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCODUF","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFDATAEMISSAO","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCNPJEMITENTE","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCPFEMITENTE","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFIEEMITENTE","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFSERIE","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFNONOTA","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFECF","Enabled", 0 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCOO","Enabled", 0 );
      }
      else
      {
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFMODELOCOD","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCHAVE","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCODUF","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFDATAEMISSAO","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCNPJEMITENTE","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCPFEMITENTE","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFIEEMITENTE","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFSERIE","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFNONOTA","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFECF","Enabled", 1 );
         gx.fn.setCtrlProperty("vSAIDADOCUMENTOREFCOO","Enabled", 1 );
      }
   };
   this.e1628y1_client=function()
   {
      this.clearMessages();
      this.s112_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'}]);
   };
   this.e1228y2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1328y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1728y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,19,21,22,25,27,30,32,35,37,38,41,43,46,48,49,52,54,57,59,60,63,65,68,70,81];
   this.GXLastCtrlId =81;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFMODELOCOD",gxz:"ZV30SaidaDocumentoRefModelocOD",gxold:"OV30SaidaDocumentoRefModelocOD",gxvar:"AV30SaidaDocumentoRefModelocOD",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV30SaidaDocumentoRefModelocOD=Value},v2z:function(Value){gx.O.ZV30SaidaDocumentoRefModelocOD=Value},v2c:function(){gx.fn.setComboBoxValue("vSAIDADOCUMENTOREFMODELOCOD",gx.O.AV30SaidaDocumentoRefModelocOD)},c2v:function(){gx.O.AV30SaidaDocumentoRefModelocOD=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADOCUMENTOREFMODELOCOD")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TAB1",grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFCHAVE",gxz:"ZV20SaidaDocumentoRefChave",gxold:"OV20SaidaDocumentoRefChave",gxvar:"AV20SaidaDocumentoRefChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SaidaDocumentoRefChave=Value},v2z:function(Value){gx.O.ZV20SaidaDocumentoRefChave=Value},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFCHAVE",gx.O.AV20SaidaDocumentoRefChave,0)},c2v:function(){gx.O.AV20SaidaDocumentoRefChave=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADOCUMENTOREFCHAVE")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TAB2",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidadocumentorefcoduf,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFCODUF",gxz:"ZV21SaidaDocumentoRefCodUf",gxold:"OV21SaidaDocumentoRefCodUf",gxvar:"AV21SaidaDocumentoRefCodUf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21SaidaDocumentoRefCodUf=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21SaidaDocumentoRefCodUf=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSAIDADOCUMENTOREFCODUF",gx.O.AV21SaidaDocumentoRefCodUf)},c2v:function(){gx.O.AV21SaidaDocumentoRefCodUf=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDADOCUMENTOREFCODUF",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFDATAEMISSAO",gxz:"ZV22SaidaDocumentoRefDataEmissao",gxold:"OV22SaidaDocumentoRefDataEmissao",gxvar:"AV22SaidaDocumentoRefDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22SaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22SaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFDATAEMISSAO",gx.O.AV22SaidaDocumentoRefDataEmissao,0)},c2v:function(){gx.O.AV22SaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADOCUMENTOREFDATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFCNPJEMITENTE",gxz:"ZV23SaidaDocumentoRefCNPJEmitente",gxold:"OV23SaidaDocumentoRefCNPJEmitente",gxvar:"AV23SaidaDocumentoRefCNPJEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23SaidaDocumentoRefCNPJEmitente=Value},v2z:function(Value){gx.O.ZV23SaidaDocumentoRefCNPJEmitente=Value},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFCNPJEMITENTE",gx.O.AV23SaidaDocumentoRefCNPJEmitente,0)},c2v:function(){gx.O.AV23SaidaDocumentoRefCNPJEmitente=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADOCUMENTOREFCNPJEMITENTE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TAB3",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFCPFEMITENTE",gxz:"ZV26SaidaDocumentoRefCPFEmitente",gxold:"OV26SaidaDocumentoRefCPFEmitente",gxvar:"AV26SaidaDocumentoRefCPFEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SaidaDocumentoRefCPFEmitente=Value},v2z:function(Value){gx.O.ZV26SaidaDocumentoRefCPFEmitente=Value},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFCPFEMITENTE",gx.O.AV26SaidaDocumentoRefCPFEmitente,0)},c2v:function(){gx.O.AV26SaidaDocumentoRefCPFEmitente=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADOCUMENTOREFCPFEMITENTE")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFIEEMITENTE",gxz:"ZV27SaidaDocumentoRefIEEmitente",gxold:"OV27SaidaDocumentoRefIEEmitente",gxvar:"AV27SaidaDocumentoRefIEEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27SaidaDocumentoRefIEEmitente=Value},v2z:function(Value){gx.O.ZV27SaidaDocumentoRefIEEmitente=Value},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFIEEMITENTE",gx.O.AV27SaidaDocumentoRefIEEmitente,0)},c2v:function(){gx.O.AV27SaidaDocumentoRefIEEmitente=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADOCUMENTOREFIEEMITENTE")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TAB4",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFSERIE",gxz:"ZV24SaidaDocumentoRefSerie",gxold:"OV24SaidaDocumentoRefSerie",gxvar:"AV24SaidaDocumentoRefSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24SaidaDocumentoRefSerie=Value},v2z:function(Value){gx.O.ZV24SaidaDocumentoRefSerie=Value},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFSERIE",gx.O.AV24SaidaDocumentoRefSerie,0)},c2v:function(){gx.O.AV24SaidaDocumentoRefSerie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDADOCUMENTOREFSERIE")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFNONOTA",gxz:"ZV25SaidaDocumentoRefNoNota",gxold:"OV25SaidaDocumentoRefNoNota",gxvar:"AV25SaidaDocumentoRefNoNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SaidaDocumentoRefNoNota=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25SaidaDocumentoRefNoNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFNONOTA",gx.O.AV25SaidaDocumentoRefNoNota,0)},c2v:function(){gx.O.AV25SaidaDocumentoRefNoNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDADOCUMENTOREFNONOTA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TAB5",grid:0};
   GXValidFnc[63]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFECF",gxz:"ZV28SaidaDocumentoRefECF",gxold:"OV28SaidaDocumentoRefECF",gxvar:"AV28SaidaDocumentoRefECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SaidaDocumentoRefECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28SaidaDocumentoRefECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFECF",gx.O.AV28SaidaDocumentoRefECF,0)},c2v:function(){gx.O.AV28SaidaDocumentoRefECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDADOCUMENTOREFECF",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADOCUMENTOREFCOO",gxz:"ZV29SaidaDocumentoRefCOO",gxold:"OV29SaidaDocumentoRefCOO",gxvar:"AV29SaidaDocumentoRefCOO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29SaidaDocumentoRefCOO=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29SaidaDocumentoRefCOO=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADOCUMENTOREFCOO",gx.O.AV29SaidaDocumentoRefCOO,0)},c2v:function(){gx.O.AV29SaidaDocumentoRefCOO=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDADOCUMENTOREFCOO",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"JS", format:2,grid:0};
   this.AV30SaidaDocumentoRefModelocOD = "" ;
   this.ZV30SaidaDocumentoRefModelocOD = "" ;
   this.OV30SaidaDocumentoRefModelocOD = "" ;
   this.AV20SaidaDocumentoRefChave = "" ;
   this.ZV20SaidaDocumentoRefChave = "" ;
   this.OV20SaidaDocumentoRefChave = "" ;
   this.AV21SaidaDocumentoRefCodUf = 0 ;
   this.ZV21SaidaDocumentoRefCodUf = 0 ;
   this.OV21SaidaDocumentoRefCodUf = 0 ;
   this.AV22SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.ZV22SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.OV22SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.AV23SaidaDocumentoRefCNPJEmitente = "" ;
   this.ZV23SaidaDocumentoRefCNPJEmitente = "" ;
   this.OV23SaidaDocumentoRefCNPJEmitente = "" ;
   this.AV26SaidaDocumentoRefCPFEmitente = "" ;
   this.ZV26SaidaDocumentoRefCPFEmitente = "" ;
   this.OV26SaidaDocumentoRefCPFEmitente = "" ;
   this.AV27SaidaDocumentoRefIEEmitente = "" ;
   this.ZV27SaidaDocumentoRefIEEmitente = "" ;
   this.OV27SaidaDocumentoRefIEEmitente = "" ;
   this.AV24SaidaDocumentoRefSerie = "" ;
   this.ZV24SaidaDocumentoRefSerie = "" ;
   this.OV24SaidaDocumentoRefSerie = "" ;
   this.AV25SaidaDocumentoRefNoNota = 0 ;
   this.ZV25SaidaDocumentoRefNoNota = 0 ;
   this.OV25SaidaDocumentoRefNoNota = 0 ;
   this.AV28SaidaDocumentoRefECF = 0 ;
   this.ZV28SaidaDocumentoRefECF = 0 ;
   this.OV28SaidaDocumentoRefECF = 0 ;
   this.AV29SaidaDocumentoRefCOO = 0 ;
   this.ZV29SaidaDocumentoRefCOO = 0 ;
   this.OV29SaidaDocumentoRefCOO = 0 ;
   this.AV30SaidaDocumentoRefModelocOD = "" ;
   this.AV20SaidaDocumentoRefChave = "" ;
   this.AV21SaidaDocumentoRefCodUf = 0 ;
   this.AV22SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.AV23SaidaDocumentoRefCNPJEmitente = "" ;
   this.AV26SaidaDocumentoRefCPFEmitente = "" ;
   this.AV27SaidaDocumentoRefIEEmitente = "" ;
   this.AV24SaidaDocumentoRefSerie = "" ;
   this.AV25SaidaDocumentoRefNoNota = 0 ;
   this.AV28SaidaDocumentoRefECF = 0 ;
   this.AV29SaidaDocumentoRefCOO = 0 ;
   this.AV13SaidaEmpresaid = "" ;
   this.AV14SaidaId = 0 ;
   this.AV31SaidaDocumentoRefSequencia = 0 ;
   this.AV16Modo = "" ;
   this.A10774SaidaDocumentoRefModeloCod = "" ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A10773SaidaDocumentoRefSequencia = 0 ;
   this.A10776SaidaDocumentoRefChave = "" ;
   this.A10777SaidaDocumentoRefCodUf = 0 ;
   this.A10778SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.A10779SaidaDocumentoRefCNPJEmitente = "" ;
   this.A10780SaidaDocumentoRefCPFEmitente = "" ;
   this.A10781SaidaDocumentoRefIEEmitente = "" ;
   this.A10782SaidaDocumentoRefSerie = "" ;
   this.A10783SaidaDocumentoRefNoNota = 0 ;
   this.A10784SaidaDocumentoRefECF = 0 ;
   this.A10785SaidaDocumentoRefCOO = 0 ;
   this.Events = {"e1228y2_client": ["ENTER", true] ,"e1328y2_client": ["'FECHAR'", true] ,"e1728y2_client": ["CANCEL", true] ,"e1628y1_client": ["VSAIDADOCUMENTOREFMODELOCOD.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV16Modo',fld:'vMODO',hsh:true}],[{ctrl:'vSAIDADOCUMENTOREFMODELOCOD'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFCHAVE","Enabled")',ctrl:'vSAIDADOCUMENTOREFCHAVE',prop:'Enabled'},{ctrl:'vSAIDADOCUMENTOREFCODUF'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFDATAEMISSAO","Enabled")',ctrl:'vSAIDADOCUMENTOREFDATAEMISSAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFCNPJEMITENTE","Enabled")',ctrl:'vSAIDADOCUMENTOREFCNPJEMITENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFCPFEMITENTE","Enabled")',ctrl:'vSAIDADOCUMENTOREFCPFEMITENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFIEEMITENTE","Enabled")',ctrl:'vSAIDADOCUMENTOREFIEEMITENTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFSERIE","Enabled")',ctrl:'vSAIDADOCUMENTOREFSERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFNONOTA","Enabled")',ctrl:'vSAIDADOCUMENTOREFNONOTA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFECF","Enabled")',ctrl:'vSAIDADOCUMENTOREFECF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAIDADOCUMENTOREFCOO","Enabled")',ctrl:'vSAIDADOCUMENTOREFCOO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV13SaidaEmpresaid',fld:'vSAIDAEMPRESAID',hsh:true},{av:'AV14SaidaId',fld:'vSAIDAID',hsh:true},{av:'AV31SaidaDocumentoRefSequencia',fld:'vSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV30SaidaDocumentoRefModelocOD',fld:'vSAIDADOCUMENTOREFMODELOCOD'},{av:'AV33SaidaDocumentoRefModeloDes',fld:'vSAIDADOCUMENTOREFMODELODES'},{av:'AV20SaidaDocumentoRefChave',fld:'vSAIDADOCUMENTOREFCHAVE'},{av:'AV21SaidaDocumentoRefCodUf',fld:'vSAIDADOCUMENTOREFCODUF'},{av:'AV22SaidaDocumentoRefDataEmissao',fld:'vSAIDADOCUMENTOREFDATAEMISSAO'},{av:'AV23SaidaDocumentoRefCNPJEmitente',fld:'vSAIDADOCUMENTOREFCNPJEMITENTE'},{av:'AV26SaidaDocumentoRefCPFEmitente',fld:'vSAIDADOCUMENTOREFCPFEMITENTE'},{av:'AV27SaidaDocumentoRefIEEmitente',fld:'vSAIDADOCUMENTOREFIEEMITENTE'},{av:'AV24SaidaDocumentoRefSerie',fld:'vSAIDADOCUMENTOREFSERIE'},{av:'AV25SaidaDocumentoRefNoNota',fld:'vSAIDADOCUMENTOREFNONOTA'},{av:'AV28SaidaDocumentoRefECF',fld:'vSAIDADOCUMENTOREFECF'},{av:'AV29SaidaDocumentoRefCOO',fld:'vSAIDADOCUMENTOREFCOO'},{av:'AV16Modo',fld:'vMODO',hsh:true},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A10774SaidaDocumentoRefModeloCod',fld:'SAIDADOCUMENTOREFMODELOCOD'},{av:'A10773SaidaDocumentoRefSequencia',fld:'SAIDADOCUMENTOREFSEQUENCIA'}],[{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV34ErroCNPJ',fld:'vERROCNPJ'},{av:'AV35ErroCPF',fld:'vERROCPF'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV31SaidaDocumentoRefSequencia',fld:'vSAIDADOCUMENTOREFSEQUENCIA'}],[]];
   this.EvtParms["VSAIDADOCUMENTOREFMODELOCOD.CLICK"] = [[{av:'AV30SaidaDocumentoRefModelocOD',fld:'vSAIDADOCUMENTOREFMODELOCOD'}],[{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13SaidaEmpresaid", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV31SaidaDocumentoRefSequencia", "vSAIDADOCUMENTOREFSEQUENCIA", 0, "int");
   this.setVCMap("AV16Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarsaidadocmtoref());
