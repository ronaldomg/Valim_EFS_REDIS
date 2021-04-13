/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:38:40.91
*/
gx.evt.autoSkip = false;
gx.define('hregistroduplicatafiscal', false, function () {
   this.ServerClass =  "hregistroduplicatafiscal" ;
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
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      this.AV23FilialId = gx.num.trunc( 0 ,0) ;
      this.AV31FilialNome =  ""  ;
      this.AV24Mes = gx.num.trunc( 0 ,0) ;
      this.AV25Ano = gx.num.trunc( 0 ,0) ;
      this.AV22SNAtualizarPagina =  "N"  ;
      this.AV36PaginacaoFiscalUltPagDuplicata = gx.num.trunc( 0 ,0) ;
   };
   this.s132_client=function()
   {
      this.AV24Mes = gx.num.trunc( 0 ,0) ;
      this.AV25Ano = gx.num.trunc( 0 ,0) ;
      this.AV22SNAtualizarPagina =  "N"  ;
   };
   this.e1111y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1411y2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1611y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,7,10,13,16,18,19,21,23,24,25,28,30,32,35,37,42,44,49,51,62,63,64,65,66,68,70];
   this.GXLastCtrlId =70;
   GXValidFnc[4]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV23FilialId",gxold:"OV23FilialId",gxvar:"AV23FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV23FilialId,0)},c2v:function(){gx.O.AV23FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV31FilialNome",gxold:"OV31FilialNome",gxvar:"AV31FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FilialNome=Value},v2z:function(Value){gx.O.ZV31FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV31FilialNome,0)},c2v:function(){gx.O.AV31FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAO",gxz:"ZV41Paginacao",gxold:"OV41Paginacao",gxvar:"AV41Paginacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Paginacao=Value},v2z:function(Value){gx.O.ZV41Paginacao=Value},v2c:function(){gx.fn.setControlValue("vPAGINACAO",gx.O.AV41Paginacao,0)},c2v:function(){gx.O.AV41Paginacao=this.val()},val:function(){return gx.fn.getControlValue("vPAGINACAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAOFISCALULTPAGDUPLICATA",gxz:"ZV36PaginacaoFiscalUltPagDuplicata",gxold:"OV36PaginacaoFiscalUltPagDuplicata",gxvar:"AV36PaginacaoFiscalUltPagDuplicata",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PaginacaoFiscalUltPagDuplicata=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36PaginacaoFiscalUltPagDuplicata=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINACAOFISCALULTPAGDUPLICATA",gx.O.AV36PaginacaoFiscalUltPagDuplicata,0)},c2v:function(){gx.O.AV36PaginacaoFiscalUltPagDuplicata=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAOFISCALULTPAGDUPLICATA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGGERADAS",gxz:"ZV18QtdPagGeradas",gxold:"OV18QtdPagGeradas",gxvar:"AV18QtdPagGeradas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18QtdPagGeradas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18QtdPagGeradas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPAGGERADAS",gx.O.AV18QtdPagGeradas,0)},c2v:function(){gx.O.AV18QtdPagGeradas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPAGGERADAS",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMES",gxz:"ZV24Mes",gxold:"OV24Mes",gxvar:"AV24Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vMES",gx.O.AV24Mes)},c2v:function(){gx.O.AV24Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZARPAGINA",gxz:"ZV22SNAtualizarPagina",gxold:"OV22SNAtualizarPagina",gxvar:"AV22SNAtualizarPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22SNAtualizarPagina=Value},v2z:function(Value){gx.O.ZV22SNAtualizarPagina=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNATUALIZARPAGINA",gx.O.AV22SNAtualizarPagina,"S")},c2v:function(){gx.O.AV22SNAtualizarPagina=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZARPAGINA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[35]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV25Ano",gxold:"OV25Ano",gxvar:"AV25Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV25Ano,0)},c2v:function(){gx.O.AV25Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPONOMECLIENTE",gxz:"ZV21TipoNomeCliente",gxold:"OV21TipoNomeCliente",gxvar:"AV21TipoNomeCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21TipoNomeCliente=Value},v2z:function(Value){gx.O.ZV21TipoNomeCliente=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPONOMECLIENTE",gx.O.AV21TipoNomeCliente)},c2v:function(){gx.O.AV21TipoNomeCliente=this.val()},val:function(){return gx.fn.getControlValue("vTIPONOMECLIENTE")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPONOTAS",gxz:"ZV26TipoNotas",gxold:"OV26TipoNotas",gxvar:"AV26TipoNotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26TipoNotas=Value},v2z:function(Value){gx.O.ZV26TipoNotas=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPONOTAS",gx.O.AV26TipoNotas)},c2v:function(){gx.O.AV26TipoNotas=this.val()},val:function(){return gx.fn.getControlValue("vTIPONOTAS")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV40QtdeCarac",gxold:"OV40QtdeCarac",gxvar:"AV40QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV40QtdeCarac,0)},c2v:function(){gx.O.AV40QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV39FilialEmpresaId",gxold:"OV39FilialEmpresaId",gxvar:"AV39FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV39FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV39FilialEmpresaId,0)},c2v:function(){gx.O.AV39FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAOFISCALFILIALEMPID",gxz:"ZV35PaginacaoFiscalFilialEmpId",gxold:"OV35PaginacaoFiscalFilialEmpId",gxvar:"AV35PaginacaoFiscalFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PaginacaoFiscalFilialEmpId=Value},v2z:function(Value){gx.O.ZV35PaginacaoFiscalFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("vPAGINACAOFISCALFILIALEMPID",gx.O.AV35PaginacaoFiscalFilialEmpId,0)},c2v:function(){gx.O.AV35PaginacaoFiscalFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("vPAGINACAOFISCALFILIALEMPID")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVOLTAR",gxz:"ZV48SnVoltar",gxold:"OV48SnVoltar",gxvar:"AV48SnVoltar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48SnVoltar=Value},v2z:function(Value){gx.O.ZV48SnVoltar=Value},v2c:function(){gx.fn.setControlValue("vSNVOLTAR",gx.O.AV48SnVoltar,0)},c2v:function(){gx.O.AV48SnVoltar=this.val()},val:function(){return gx.fn.getControlValue("vSNVOLTAR")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   GXValidFnc[70]={fld:"PROMPT_FILIALID",grid:0};
   this.AV23FilialId = 0 ;
   this.ZV23FilialId = 0 ;
   this.OV23FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.ZV31FilialNome = "" ;
   this.OV31FilialNome = "" ;
   this.AV41Paginacao = "" ;
   this.ZV41Paginacao = "" ;
   this.OV41Paginacao = "" ;
   this.AV36PaginacaoFiscalUltPagDuplicata = 0 ;
   this.ZV36PaginacaoFiscalUltPagDuplicata = 0 ;
   this.OV36PaginacaoFiscalUltPagDuplicata = 0 ;
   this.AV18QtdPagGeradas = 0 ;
   this.ZV18QtdPagGeradas = 0 ;
   this.OV18QtdPagGeradas = 0 ;
   this.AV24Mes = 0 ;
   this.ZV24Mes = 0 ;
   this.OV24Mes = 0 ;
   this.AV22SNAtualizarPagina = "" ;
   this.ZV22SNAtualizarPagina = "" ;
   this.OV22SNAtualizarPagina = "" ;
   this.AV25Ano = 0 ;
   this.ZV25Ano = 0 ;
   this.OV25Ano = 0 ;
   this.AV21TipoNomeCliente = "" ;
   this.ZV21TipoNomeCliente = "" ;
   this.OV21TipoNomeCliente = "" ;
   this.AV26TipoNotas = "" ;
   this.ZV26TipoNotas = "" ;
   this.OV26TipoNotas = "" ;
   this.AV40QtdeCarac = 0 ;
   this.ZV40QtdeCarac = 0 ;
   this.OV40QtdeCarac = 0 ;
   this.AV39FilialEmpresaId = "" ;
   this.ZV39FilialEmpresaId = "" ;
   this.OV39FilialEmpresaId = "" ;
   this.AV35PaginacaoFiscalFilialEmpId = "" ;
   this.ZV35PaginacaoFiscalFilialEmpId = "" ;
   this.OV35PaginacaoFiscalFilialEmpId = "" ;
   this.AV48SnVoltar = "" ;
   this.ZV48SnVoltar = "" ;
   this.OV48SnVoltar = "" ;
   this.AV23FilialId = 0 ;
   this.AV31FilialNome = "" ;
   this.AV41Paginacao = "" ;
   this.AV36PaginacaoFiscalUltPagDuplicata = 0 ;
   this.AV18QtdPagGeradas = 0 ;
   this.AV24Mes = 0 ;
   this.AV22SNAtualizarPagina = "" ;
   this.AV25Ano = 0 ;
   this.AV21TipoNomeCliente = "" ;
   this.AV26TipoNotas = "" ;
   this.AV40QtdeCarac = 0 ;
   this.AV39FilialEmpresaId = "" ;
   this.AV35PaginacaoFiscalFilialEmpId = "" ;
   this.AV48SnVoltar = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A7430PaginacaoFiscalFilialId = 0 ;
   this.A7429PaginacaoFiscalFilialEmpId = "" ;
   this.A7423PaginacaoFiscalUltPagDuplicata = 0 ;
   this.A1136FilialNome = "" ;
   this.Events = {"e1111y2_client": ["'FECHAR'", true] ,"e1411y2_client": ["ENTER", true] ,"e1611y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV22SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'},{av:'AV36PaginacaoFiscalUltPagDuplicata',fld:'vPAGINACAOFISCALULTPAGDUPLICATA'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV35PaginacaoFiscalFilialEmpId',fld:'vPAGINACAOFISCALFILIALEMPID'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV30FilialUnica',fld:'vFILIALUNICA'},{av:'AV24Mes',fld:'vMES'}],[{av:'AV36PaginacaoFiscalUltPagDuplicata',fld:'vPAGINACAOFISCALULTPAGDUPLICATA'},{av:'AV48SnVoltar',fld:'vSNVOLTAR'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV31FilialNome',fld:'vFILIALNOME'},{av:'AV24Mes',fld:'vMES'},{av:'AV25Ano',fld:'vANO'},{av:'AV22SNAtualizarPagina',fld:'vSNATUALIZARPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV44SnErro',fld:'vSNERRO'},{av:'AV60Pgmname',fld:'vPGMNAME'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV24Mes',fld:'vMES'},{av:'AV25Ano',fld:'vANO'},{av:'AV21TipoNomeCliente',fld:'vTIPONOMECLIENTE'},{av:'AV26TipoNotas',fld:'vTIPONOTAS'},{av:'AV36PaginacaoFiscalUltPagDuplicata',fld:'vPAGINACAOFISCALULTPAGDUPLICATA'},{av:'AV61Pgmdesc',fld:'vPGMDESC'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV39FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV36PaginacaoFiscalUltPagDuplicata',fld:'vPAGINACAOFISCALULTPAGDUPLICATA'},{av:'AV26TipoNotas',fld:'vTIPONOTAS'},{av:'AV21TipoNomeCliente',fld:'vTIPONOMECLIENTE'},{av:'AV25Ano',fld:'vANO'},{av:'AV24Mes',fld:'vMES'},{av:'AV23FilialId',fld:'vFILIALID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV44SnErro',fld:'vSNERRO'},{av:'AV64GXLvl131',fld:'vGXLVL131'}]];
   this.setPrompt("PROMPT_FILIALID", [18]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistroduplicatafiscal());
