/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:57.46
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoclientesemdiaatraso', false, function () {
   this.ServerClass =  "hrelacaoclientesemdiaatraso" ;
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
   this.Validv_Classificacaoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Classificacaoid",["gx.O.AV25EmpresaClassificacaoEmpresaId", "gx.O.AV26ClassificacaoId", "gx.O.AV27OpcaoClassificacaoId1", "gx.O.AV28OpcaoClassificacaoId2", "gx.O.AV31OpcaoClassificacaoId3"],["AV27OpcaoClassificacaoId1", "AV28OpcaoClassificacaoId2", "AV31OpcaoClassificacaoId3"]);
      return true;
   }
   this.Validv_Empresaclassificacaoempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Empresaclassificacaoempresaid",["gx.O.AV25EmpresaClassificacaoEmpresaId", "gx.O.AV26ClassificacaoId", "gx.O.AV27OpcaoClassificacaoId1", "gx.O.AV28OpcaoClassificacaoId2", "gx.O.AV31OpcaoClassificacaoId3"],["AV26ClassificacaoId", "AV27OpcaoClassificacaoId1", "AV28OpcaoClassificacaoId2", "AV31OpcaoClassificacaoId3"]);
      return true;
   }
   this.e11ls2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ls2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ls2_client=function()
   {
      this.executeServerEvent("VFILIALID.ISVALID", true, null, false, true);
   };
   this.e17ls2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,27,28,31,33,36,38,41,43,46,48,49,50,53,55,64,65,67,69];
   this.GXLastCtrlId =69;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE5",grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOCONTA",gxz:"ZV22SituacaoConta",gxold:"OV22SituacaoConta",gxvar:"AV22SituacaoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22SituacaoConta=Value},v2z:function(Value){gx.O.ZV22SituacaoConta=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOCONTA",gx.O.AV22SituacaoConta)},c2v:function(){gx.O.AV22SituacaoConta=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOCONTA")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV55GerarCSV",gxold:"OV55GerarCSV",gxvar:"AV55GerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV55GerarCSV=Value},v2z:function(Value){gx.O.ZV55GerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV55GerarCSV,"S")},c2v:function(){gx.O.AV55GerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[25]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:'e15ls2_client',rgrid:[],fld:"vFILIALID",gxz:"ZV58FilialId",gxold:"OV58FilialId",gxvar:"AV58FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV58FilialId,0)},c2v:function(){gx.O.AV58FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOMEREDUZIDO",gxz:"ZV59FilialNomeReduzido",gxold:"OV59FilialNomeReduzido",gxvar:"AV59FilialNomeReduzido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59FilialNomeReduzido=Value},v2z:function(Value){gx.O.ZV59FilialNomeReduzido=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOMEREDUZIDO",gx.O.AV59FilialNomeReduzido,0)},c2v:function(){gx.O.AV59FilialNomeReduzido=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOMEREDUZIDO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAREF",gxz:"ZV20DataRef",gxold:"OV20DataRef",gxvar:"AV20DataRef",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataRef=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataRef=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAREF",gx.O.AV20DataRef,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataRef=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAREF")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASITUACAO",gxz:"ZV21PessoaSituacao",gxold:"OV21PessoaSituacao",gxvar:"AV21PessoaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21PessoaSituacao=Value},v2z:function(Value){gx.O.ZV21PessoaSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPESSOASITUACAO",gx.O.AV21PessoaSituacao)},c2v:function(){gx.O.AV21PessoaSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASITUACAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV26ClassificacaoId",gxold:"OV26ClassificacaoId",gxvar:"AV26ClassificacaoId",ucs:[],op:[50,49,48],ip:[50,49,48,43,65],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV26ClassificacaoId=Value},v2z:function(Value){gx.O.ZV26ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV26ClassificacaoId)},c2v:function(){gx.O.AV26ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID1",gxz:"ZV27OpcaoClassificacaoId1",gxold:"OV27OpcaoClassificacaoId1",gxvar:"AV27OpcaoClassificacaoId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV27OpcaoClassificacaoId1=Value},v2z:function(Value){gx.O.ZV27OpcaoClassificacaoId1=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOID1",gx.O.AV27OpcaoClassificacaoId1)},c2v:function(){gx.O.AV27OpcaoClassificacaoId1=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID1")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID2",gxz:"ZV28OpcaoClassificacaoId2",gxold:"OV28OpcaoClassificacaoId2",gxvar:"AV28OpcaoClassificacaoId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV28OpcaoClassificacaoId2=Value},v2z:function(Value){gx.O.ZV28OpcaoClassificacaoId2=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOID2",gx.O.AV28OpcaoClassificacaoId2)},c2v:function(){gx.O.AV28OpcaoClassificacaoId2=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID2")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID3",gxz:"ZV31OpcaoClassificacaoId3",gxold:"OV31OpcaoClassificacaoId3",gxvar:"AV31OpcaoClassificacaoId3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV31OpcaoClassificacaoId3=Value},v2z:function(Value){gx.O.ZV31OpcaoClassificacaoId3=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOID3",gx.O.AV31OpcaoClassificacaoId3)},c2v:function(){gx.O.AV31OpcaoClassificacaoId3=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID3")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEMAXPAR",gxz:"ZV57QtdeMaxPar",gxold:"OV57QtdeMaxPar",gxvar:"AV57QtdeMaxPar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57QtdeMaxPar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57QtdeMaxPar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEMAXPAR",gx.O.AV57QtdeMaxPar,0)},c2v:function(){gx.O.AV57QtdeMaxPar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEMAXPAR",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"JS", format:2,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaclassificacaoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACLASSIFICACAOEMPRESAID",gxz:"ZV25EmpresaClassificacaoEmpresaId",gxold:"OV25EmpresaClassificacaoEmpresaId",gxvar:"AV25EmpresaClassificacaoEmpresaId",ucs:[],op:[50,49,48,43],ip:[50,49,48,43,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25EmpresaClassificacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV25EmpresaClassificacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACLASSIFICACAOEMPRESAID",gx.O.AV25EmpresaClassificacaoEmpresaId,0)},c2v:function(){gx.O.AV25EmpresaClassificacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"PROMPT_FILIALID",grid:0};
   this.AV22SituacaoConta = "" ;
   this.ZV22SituacaoConta = "" ;
   this.OV22SituacaoConta = "" ;
   this.AV55GerarCSV = "" ;
   this.ZV55GerarCSV = "" ;
   this.OV55GerarCSV = "" ;
   this.AV58FilialId = 0 ;
   this.ZV58FilialId = 0 ;
   this.OV58FilialId = 0 ;
   this.AV59FilialNomeReduzido = "" ;
   this.ZV59FilialNomeReduzido = "" ;
   this.OV59FilialNomeReduzido = "" ;
   this.AV20DataRef = gx.date.nullDate() ;
   this.ZV20DataRef = gx.date.nullDate() ;
   this.OV20DataRef = gx.date.nullDate() ;
   this.AV21PessoaSituacao = "" ;
   this.ZV21PessoaSituacao = "" ;
   this.OV21PessoaSituacao = "" ;
   this.AV26ClassificacaoId = "" ;
   this.ZV26ClassificacaoId = "" ;
   this.OV26ClassificacaoId = "" ;
   this.AV27OpcaoClassificacaoId1 = "" ;
   this.ZV27OpcaoClassificacaoId1 = "" ;
   this.OV27OpcaoClassificacaoId1 = "" ;
   this.AV28OpcaoClassificacaoId2 = "" ;
   this.ZV28OpcaoClassificacaoId2 = "" ;
   this.OV28OpcaoClassificacaoId2 = "" ;
   this.AV31OpcaoClassificacaoId3 = "" ;
   this.ZV31OpcaoClassificacaoId3 = "" ;
   this.OV31OpcaoClassificacaoId3 = "" ;
   this.AV57QtdeMaxPar = 0 ;
   this.ZV57QtdeMaxPar = 0 ;
   this.OV57QtdeMaxPar = 0 ;
   this.AV25EmpresaClassificacaoEmpresaId = "" ;
   this.ZV25EmpresaClassificacaoEmpresaId = "" ;
   this.OV25EmpresaClassificacaoEmpresaId = "" ;
   this.AV22SituacaoConta = "" ;
   this.AV55GerarCSV = "" ;
   this.AV58FilialId = 0 ;
   this.AV59FilialNomeReduzido = "" ;
   this.AV20DataRef = gx.date.nullDate() ;
   this.AV21PessoaSituacao = "" ;
   this.AV26ClassificacaoId = "" ;
   this.AV27OpcaoClassificacaoId1 = "" ;
   this.AV28OpcaoClassificacaoId2 = "" ;
   this.AV31OpcaoClassificacaoId3 = "" ;
   this.AV57QtdeMaxPar = 0 ;
   this.AV25EmpresaClassificacaoEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.A9349FilialNomeReduzido = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.Events = {"e11ls2_client": ["'FECHAR'", true] ,"e13ls2_client": ["ENTER", true] ,"e15ls2_client": ["VFILIALID.ISVALID", true] ,"e17ls2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV25EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV32primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'}],[{av:'AV26ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV32primeiraVez',fld:'vPRIMEIRAVEZ'},{av:'AV27OpcaoClassificacaoId1',fld:'vOPCAOCLASSIFICACAOID1'},{av:'AV28OpcaoClassificacaoId2',fld:'vOPCAOCLASSIFICACAOID2'},{av:'AV31OpcaoClassificacaoId3',fld:'vOPCAOCLASSIFICACAOID3'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV64Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV55GerarCSV',fld:'vGERARCSV'},{av:'AV22SituacaoConta',fld:'vSITUACAOCONTA'},{av:'AV58FilialId',fld:'vFILIALID'},{av:'AV59FilialNomeReduzido',fld:'vFILIALNOMEREDUZIDO'},{av:'AV20DataRef',fld:'vDATAREF'},{av:'AV21PessoaSituacao',fld:'vPESSOASITUACAO'},{av:'AV26ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV27OpcaoClassificacaoId1',fld:'vOPCAOCLASSIFICACAOID1'},{av:'AV28OpcaoClassificacaoId2',fld:'vOPCAOCLASSIFICACAOID2'},{av:'AV31OpcaoClassificacaoId3',fld:'vOPCAOCLASSIFICACAOID3'},{av:'AV57QtdeMaxPar',fld:'vQTDEMAXPAR'},{av:'AV65Pgmdesc',fld:'vPGMDESC'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV60FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV23SnErro',fld:'vSNERRO'},{av:'AV70GXLvl135',fld:'vGXLVL135'}]];
   this.EvtParms["VFILIALID.ISVALID"] = [[{av:'AV58FilialId',fld:'vFILIALID'}],[{av:'AV59FilialNomeReduzido',fld:'vFILIALNOMEREDUZIDO'}]];
   this.setPrompt("PROMPT_FILIALID", [27]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoclientesemdiaatraso());
