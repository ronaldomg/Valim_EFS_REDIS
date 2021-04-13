/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:34:24.24
*/
gx.evt.autoSkip = false;
gx.define('hsuspenderclientecondicional', false, function () {
   this.ServerClass =  "hsuspenderclientecondicional" ;
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
      this.AV26ClassificacaoEmpresaId=gx.fn.getControlValue("vCLASSIFICACAOEMPRESAID") ;
      this.AV25CodificacaoEmpresaId=gx.fn.getControlValue("vCODIFICACAOEMPRESAID") ;
   };
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vSNRELATORIO","Visible", 0 );
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vDATACONDICIONAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNVOLTARCLIENTENORMAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vCLASSIFICACAOID","Enabled", 1 );
      gx.fn.setCtrlProperty("vCODIFICACAOID","Enabled", 1 );
      gx.fn.setCtrlProperty("BTNCONFIRMAR","Enabled", 1 );
      gx.fn.setCtrlProperty("BTNFECHAR","Enabled", 1 );
   };
   this.s152_client=function()
   {
      this.AV24SNErro =  "N"  ;
      if ( (new gx.date.gxdate("").compare(this.AV23DataCondicional)==0) && this.AV24SNErro == "N" )
      {
         this.addMessage("Informe a Data de Referência da Condicional");
         gx.fn.usrSetFocus("vDATACONDICIONAL") ;
         this.AV24SNErro =  "S"  ;
      }
      else
      {
         if ( ! (new gx.date.gxdate("").compare(this.AV23DataCondicional)==0) && gx.date.year( this.AV23DataCondicional) < 1900 && this.AV24SNErro == "N" )
         {
            this.addMessage("Data de Referência da Condicional inválida");
            gx.fn.usrSetFocus("vDATACONDICIONAL") ;
            this.AV24SNErro =  "S"  ;
         }
      }
   };
   this.s162_client=function()
   {
      gx.fn.setCtrlProperty("vDATACONDICIONAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNVOLTARCLIENTENORMAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vCLASSIFICACAOID","Enabled", 0 );
      gx.fn.setCtrlProperty("vCODIFICACAOID","Enabled", 0 );
      gx.fn.setCtrlProperty("BTNCONFIRMAR","Enabled", 0 );
      gx.fn.setCtrlProperty("BTNFECHAR","Enabled", 0 );
   };
   this.e15z82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11z82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12z82_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e17z82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,24,28,30,33,35,38,41,43,44,47,49,50,53,55,65,66,67,68,70];
   this.GXLastCtrlId =70;
   this.TIMER1Container = gx.uc.getNew(this, 56, 14, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12z82_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACONDICIONAL",gxz:"ZV23DataCondicional",gxold:"OV23DataCondicional",gxvar:"AV23DataCondicional",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DataCondicional=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DataCondicional=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACONDICIONAL",gx.O.AV23DataCondicional,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DataCondicional=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACONDICIONAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVOLTARCLIENTENORMAL",gxz:"ZV22SNVoltarClienteNormal",gxold:"OV22SNVoltarClienteNormal",gxvar:"AV22SNVoltarClienteNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22SNVoltarClienteNormal=Value},v2z:function(Value){gx.O.ZV22SNVoltarClienteNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNVOLTARCLIENTENORMAL",gx.O.AV22SNVoltarClienteNormal,"S")},c2v:function(){gx.O.AV22SNVoltarClienteNormal=this.val()},val:function(){return gx.fn.getControlValue("vSNVOLTARCLIENTENORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV27ClassificacaoId",gxold:"OV27ClassificacaoId",gxvar:"AV27ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV27ClassificacaoId=Value},v2z:function(Value){gx.O.ZV27ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV27ClassificacaoId)},c2v:function(){gx.O.AV27ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV28CodificacaoId",gxold:"OV28CodificacaoId",gxvar:"AV28CodificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV28CodificacaoId=Value},v2z:function(Value){gx.O.ZV28CodificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV28CodificacaoId)},c2v:function(){gx.O.AV28CodificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TAB4",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[44]={fld:"TAB5",grid:0};
   GXValidFnc[47]={fld:"IMGERRO",grid:0};
   GXValidFnc[49]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[50]={fld:"TAB6",grid:0};
   GXValidFnc[53]={fld:"IMGPROC",grid:0};
   GXValidFnc[55]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRELATORIO",gxz:"ZV31SNRelatorio",gxold:"OV31SNRelatorio",gxvar:"AV31SNRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31SNRelatorio=Value},v2z:function(Value){gx.O.ZV31SNRelatorio=Value},v2c:function(){gx.fn.setControlValue("vSNRELATORIO",gx.O.AV31SNRelatorio,0)},c2v:function(){gx.O.AV31SNRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vSNRELATORIO")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV34ProcessoId",gxold:"OV34ProcessoId",gxvar:"AV34ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV34ProcessoId,0)},c2v:function(){gx.O.AV34ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV12NomeRelativo",gxold:"OV12NomeRelativo",gxvar:"AV12NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12NomeRelativo=Value},v2z:function(Value){gx.O.ZV12NomeRelativo=Value},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV12NomeRelativo,0)},c2v:function(){gx.O.AV12NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   this.AV23DataCondicional = gx.date.nullDate() ;
   this.ZV23DataCondicional = gx.date.nullDate() ;
   this.OV23DataCondicional = gx.date.nullDate() ;
   this.AV22SNVoltarClienteNormal = "" ;
   this.ZV22SNVoltarClienteNormal = "" ;
   this.OV22SNVoltarClienteNormal = "" ;
   this.AV27ClassificacaoId = "" ;
   this.ZV27ClassificacaoId = "" ;
   this.OV27ClassificacaoId = "" ;
   this.AV28CodificacaoId = "" ;
   this.ZV28CodificacaoId = "" ;
   this.OV28CodificacaoId = "" ;
   this.AV31SNRelatorio = "" ;
   this.ZV31SNRelatorio = "" ;
   this.OV31SNRelatorio = "" ;
   this.AV34ProcessoId = 0 ;
   this.ZV34ProcessoId = 0 ;
   this.OV34ProcessoId = 0 ;
   this.AV12NomeRelativo = "" ;
   this.ZV12NomeRelativo = "" ;
   this.OV12NomeRelativo = "" ;
   this.AV23DataCondicional = gx.date.nullDate() ;
   this.AV22SNVoltarClienteNormal = "" ;
   this.AV27ClassificacaoId = "" ;
   this.AV28CodificacaoId = "" ;
   this.AV31SNRelatorio = "" ;
   this.AV34ProcessoId = 0 ;
   this.AV12NomeRelativo = "" ;
   this.A1550ErroProcessoId = 0 ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1551ErroProcessoDescricao = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.AV24SNErro = "" ;
   this.Events = {"e15z82_client": ["ENTER", true] ,"e11z82_client": ["'FECHAR'", true] ,"e12z82_client": ["TIMER1.ELAPSED", true] ,"e17z82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV23DataCondicional',fld:'vDATACONDICIONAL'},{av:'AV22SNVoltarClienteNormal',fld:'vSNVOLTARCLIENTENORMAL'},{av:'AV27ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV28CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV33ErrDsc',fld:'vERRDSC'}],[{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB6","Visible")',ctrl:'TAB6',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34ProcessoId',fld:'vPROCESSOID'},{av:'AV32ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV33ErrDsc',fld:'vERRDSC'},{av:'AV28CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV27ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV22SNVoltarClienteNormal',fld:'vSNVOLTARCLIENTENORMAL'},{av:'AV23DataCondicional',fld:'vDATACONDICIONAL'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'gx.fn.getCtrlProperty("vDATACONDICIONAL","Enabled")',ctrl:'vDATACONDICIONAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNVOLTARCLIENTENORMAL","Enabled")',ctrl:'vSNVOLTARCLIENTENORMAL',prop:'Enabled'},{ctrl:'vCLASSIFICACAOID'},{ctrl:'vCODIFICACAOID'},{ctrl:'BTNCONFIRMAR',prop:'Enabled'},{ctrl:'BTNFECHAR',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV24SNErro',fld:'vSNERRO'},{av:'AV23DataCondicional',fld:'vDATACONDICIONAL'}],[{av:'AV24SNErro',fld:'vSNERRO'},{av:'gx.fn.getCtrlProperty("vDATACONDICIONAL","Enabled")',ctrl:'vDATACONDICIONAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNVOLTARCLIENTENORMAL","Enabled")',ctrl:'vSNVOLTARCLIENTENORMAL',prop:'Enabled'},{ctrl:'vCLASSIFICACAOID'},{ctrl:'vCODIFICACAOID'},{ctrl:'BTNCONFIRMAR',prop:'Enabled'},{ctrl:'BTNFECHAR',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV34ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1550ErroProcessoId',fld:'ERROPROCESSOID'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'}],[{av:'AV40GXLvl166',fld:'vGXLVL166'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB6","Visible")',ctrl:'TAB6',prop:'Visible'},{av:'AV34ProcessoId',fld:'vPROCESSOID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'gx.fn.getCtrlProperty("vDATACONDICIONAL","Enabled")',ctrl:'vDATACONDICIONAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNVOLTARCLIENTENORMAL","Enabled")',ctrl:'vSNVOLTARCLIENTENORMAL',prop:'Enabled'},{ctrl:'vCLASSIFICACAOID'},{ctrl:'vCODIFICACAOID'},{ctrl:'BTNCONFIRMAR',prop:'Enabled'},{ctrl:'BTNFECHAR',prop:'Enabled'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV26ClassificacaoEmpresaId", "vCLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV25CodificacaoEmpresaId", "vCODIFICACAOEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsuspenderclientecondicional());
