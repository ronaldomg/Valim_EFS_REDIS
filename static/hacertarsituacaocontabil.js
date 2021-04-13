/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:27:33.35
*/
gx.evt.autoSkip = false;
gx.define('hacertarsituacaocontabil', false, function () {
   this.ServerClass =  "hacertarsituacaocontabil" ;
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
   this.Validv_Empresapadraofilial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOFILIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11e82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13e82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16e82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,12,16,20,24,27,29,32,35,37,39,41,43,46,48,50,53,55,56,57,60,62,65,67,69,72,74,77,79,81,87,93,94,96,97,98,99,100,101];
   this.GXLastCtrlId =101;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVERIFICARLANCAMCXABCO",gxz:"ZV20VerificarLancamCxaBco",gxold:"OV20VerificarLancamCxaBco",gxvar:"AV20VerificarLancamCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV20VerificarLancamCxaBco=Value},v2z:function(Value){gx.O.ZV20VerificarLancamCxaBco=Value},v2c:function(){gx.fn.setCheckBoxValue("vVERIFICARLANCAMCXABCO",gx.O.AV20VerificarLancamCxaBco,"S")},c2v:function(){gx.O.AV20VerificarLancamCxaBco=this.val()},val:function(){return gx.fn.getControlValue("vVERIFICARLANCAMCXABCO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVERIFICARLANCAMCONPAG",gxz:"ZV21VerificarLancamConPag",gxold:"OV21VerificarLancamConPag",gxvar:"AV21VerificarLancamConPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21VerificarLancamConPag=Value},v2z:function(Value){gx.O.ZV21VerificarLancamConPag=Value},v2c:function(){gx.fn.setCheckBoxValue("vVERIFICARLANCAMCONPAG",gx.O.AV21VerificarLancamConPag,"S")},c2v:function(){gx.O.AV21VerificarLancamConPag=this.val()},val:function(){return gx.fn.getControlValue("vVERIFICARLANCAMCONPAG")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVERIFICARLANCAMCONREC",gxz:"ZV22VerificarLancamConRec",gxold:"OV22VerificarLancamConRec",gxvar:"AV22VerificarLancamConRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22VerificarLancamConRec=Value},v2z:function(Value){gx.O.ZV22VerificarLancamConRec=Value},v2c:function(){gx.fn.setCheckBoxValue("vVERIFICARLANCAMCONREC",gx.O.AV22VerificarLancamConRec,"S")},c2v:function(){gx.O.AV22VerificarLancamConRec=this.val()},val:function(){return gx.fn.getControlValue("vVERIFICARLANCAMCONREC")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATUALIZARLANCAMCONTAB",gxz:"ZV23AtualizarLancamContab",gxold:"OV23AtualizarLancamContab",gxvar:"AV23AtualizarLancamContab",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23AtualizarLancamContab=Value},v2z:function(Value){gx.O.ZV23AtualizarLancamContab=Value},v2c:function(){gx.fn.setCheckBoxValue("vATUALIZARLANCAMCONTAB",gx.O.AV23AtualizarLancamContab,"S")},c2v:function(){gx.O.AV23AtualizarLancamContab=this.val()},val:function(){return gx.fn.getControlValue("vATUALIZARLANCAMCONTAB")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLE11",grid:0};
   GXValidFnc[32]={fld:"TABLE12",grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFINI",gxz:"ZV30MesRefIni",gxold:"OV30MesRefIni",gxvar:"AV30MesRefIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30MesRefIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30MesRefIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFINI",gx.O.AV30MesRefIni,0)},c2v:function(){gx.O.AV30MesRefIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFINI",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFINI",gxz:"ZV32AnoRefIni",gxold:"OV32AnoRefIni",gxvar:"AV32AnoRefIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32AnoRefIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32AnoRefIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFINI",gx.O.AV32AnoRefIni,0)},c2v:function(){gx.O.AV32AnoRefIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFINI",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={fld:"TABLE13",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFFIM",gxz:"ZV31MesRefFim",gxold:"OV31MesRefFim",gxvar:"AV31MesRefFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31MesRefFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31MesRefFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFFIM",gx.O.AV31MesRefFim,0)},c2v:function(){gx.O.AV31MesRefFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFFIM",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFFIM",gxz:"ZV33AnoRefFim",gxold:"OV33AnoRefFim",gxvar:"AV33AnoRefFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33AnoRefFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33AnoRefFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFFIM",gx.O.AV33AnoRefFim,0)},c2v:function(){gx.O.AV33AnoRefFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFFIM",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV24FilialId",gxold:"OV24FilialId",gxvar:"AV24FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV24FilialId,0)},c2v:function(){gx.O.AV24FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV29FilialNome",gxold:"OV29FilialNome",gxvar:"AV29FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29FilialNome=Value},v2z:function(Value){gx.O.ZV29FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV29FilialNome,0)},c2v:function(){gx.O.AV29FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraofilial,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOFILIAL",gxz:"ZV34EmpresaPadraoFilial",gxold:"OV34EmpresaPadraoFilial",gxvar:"AV34EmpresaPadraoFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EmpresaPadraoFilial=Value},v2z:function(Value){gx.O.ZV34EmpresaPadraoFilial=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOFILIAL",gx.O.AV34EmpresaPadraoFilial,0)},c2v:function(){gx.O.AV34EmpresaPadraoFilial=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOFILIAL")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[62]={fld:"TABLE9",grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOHISIDINI",gxz:"ZV25LancamentoCxaBcoHisIdIni",gxold:"OV25LancamentoCxaBcoHisIdIni",gxvar:"AV25LancamentoCxaBcoHisIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25LancamentoCxaBcoHisIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25LancamentoCxaBcoHisIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOHISIDINI",gx.O.AV25LancamentoCxaBcoHisIdIni,0)},c2v:function(){gx.O.AV25LancamentoCxaBcoHisIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCOHISIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOHISIDFIM",gxz:"ZV27LancamentoCxaBcoHisIdFim",gxold:"OV27LancamentoCxaBcoHisIdFim",gxvar:"AV27LancamentoCxaBcoHisIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27LancamentoCxaBcoHisIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27LancamentoCxaBcoHisIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOHISIDFIM",gx.O.AV27LancamentoCxaBcoHisIdFim,0)},c2v:function(){gx.O.AV27LancamentoCxaBcoHisIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCOHISIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[74]={fld:"TABLE10",grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTALANCAMTPLANCAMIDINI",gxz:"ZV26ContaLancamTpLancamIdIni",gxold:"OV26ContaLancamTpLancamIdIni",gxvar:"AV26ContaLancamTpLancamIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaLancamTpLancamIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26ContaLancamTpLancamIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTALANCAMTPLANCAMIDINI",gx.O.AV26ContaLancamTpLancamIdIni,0)},c2v:function(){gx.O.AV26ContaLancamTpLancamIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTALANCAMTPLANCAMIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTALANCAMTPLANCAMIDFIM",gxz:"ZV28ContaLancamTpLancamIdFim",gxold:"OV28ContaLancamTpLancamIdFim",gxvar:"AV28ContaLancamTpLancamIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaLancamTpLancamIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ContaLancamTpLancamIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTALANCAMTPLANCAMIDFIM",gx.O.AV28ContaLancamTpLancamIdFim,0)},c2v:function(){gx.O.AV28ContaLancamTpLancamIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTALANCAMTPLANCAMIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TABLE5",grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV46AcessoSistemaSequencia",gxold:"OV46AcessoSistemaSequencia",gxvar:"AV46AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV46AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV46AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"JS", format:2,grid:0};
   GXValidFnc[96]={fld:"BTNHELP",grid:0};
   GXValidFnc[97]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[98]={fld:"PROMPT_LANCAMENTOCXABCOHISIDINI",grid:0};
   GXValidFnc[99]={fld:"PROMPT_LANCAMENTOCXABCOHISIDFIM",grid:0};
   GXValidFnc[100]={fld:"PROMPT_CONTALANCAMTPLANCAMIDINI",grid:0};
   GXValidFnc[101]={fld:"PROMPT_CONTALANCAMTPLANCAMIDFIM",grid:0};
   this.AV20VerificarLancamCxaBco = "" ;
   this.ZV20VerificarLancamCxaBco = "" ;
   this.OV20VerificarLancamCxaBco = "" ;
   this.AV21VerificarLancamConPag = "" ;
   this.ZV21VerificarLancamConPag = "" ;
   this.OV21VerificarLancamConPag = "" ;
   this.AV22VerificarLancamConRec = "" ;
   this.ZV22VerificarLancamConRec = "" ;
   this.OV22VerificarLancamConRec = "" ;
   this.AV23AtualizarLancamContab = "" ;
   this.ZV23AtualizarLancamContab = "" ;
   this.OV23AtualizarLancamContab = "" ;
   this.AV30MesRefIni = 0 ;
   this.ZV30MesRefIni = 0 ;
   this.OV30MesRefIni = 0 ;
   this.AV32AnoRefIni = 0 ;
   this.ZV32AnoRefIni = 0 ;
   this.OV32AnoRefIni = 0 ;
   this.AV31MesRefFim = 0 ;
   this.ZV31MesRefFim = 0 ;
   this.OV31MesRefFim = 0 ;
   this.AV33AnoRefFim = 0 ;
   this.ZV33AnoRefFim = 0 ;
   this.OV33AnoRefFim = 0 ;
   this.AV24FilialId = 0 ;
   this.ZV24FilialId = 0 ;
   this.OV24FilialId = 0 ;
   this.AV29FilialNome = "" ;
   this.ZV29FilialNome = "" ;
   this.OV29FilialNome = "" ;
   this.AV34EmpresaPadraoFilial = "" ;
   this.ZV34EmpresaPadraoFilial = "" ;
   this.OV34EmpresaPadraoFilial = "" ;
   this.AV25LancamentoCxaBcoHisIdIni = 0 ;
   this.ZV25LancamentoCxaBcoHisIdIni = 0 ;
   this.OV25LancamentoCxaBcoHisIdIni = 0 ;
   this.AV27LancamentoCxaBcoHisIdFim = 0 ;
   this.ZV27LancamentoCxaBcoHisIdFim = 0 ;
   this.OV27LancamentoCxaBcoHisIdFim = 0 ;
   this.AV26ContaLancamTpLancamIdIni = 0 ;
   this.ZV26ContaLancamTpLancamIdIni = 0 ;
   this.OV26ContaLancamTpLancamIdIni = 0 ;
   this.AV28ContaLancamTpLancamIdFim = 0 ;
   this.ZV28ContaLancamTpLancamIdFim = 0 ;
   this.OV28ContaLancamTpLancamIdFim = 0 ;
   this.AV46AcessoSistemaSequencia = 0 ;
   this.ZV46AcessoSistemaSequencia = 0 ;
   this.OV46AcessoSistemaSequencia = 0 ;
   this.AV20VerificarLancamCxaBco = "" ;
   this.AV21VerificarLancamConPag = "" ;
   this.AV22VerificarLancamConRec = "" ;
   this.AV23AtualizarLancamContab = "" ;
   this.AV30MesRefIni = 0 ;
   this.AV32AnoRefIni = 0 ;
   this.AV31MesRefFim = 0 ;
   this.AV33AnoRefFim = 0 ;
   this.AV24FilialId = 0 ;
   this.AV29FilialNome = "" ;
   this.AV34EmpresaPadraoFilial = "" ;
   this.AV25LancamentoCxaBcoHisIdIni = 0 ;
   this.AV27LancamentoCxaBcoHisIdFim = 0 ;
   this.AV26ContaLancamTpLancamIdIni = 0 ;
   this.AV28ContaLancamTpLancamIdFim = 0 ;
   this.AV46AcessoSistemaSequencia = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.Events = {"e11e82_client": ["'FECHAR'", true] ,"e13e82_client": ["ENTER", true] ,"e16e82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV48FilialParametro',fld:'vFILIALPARAMETRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34EmpresaPadraoFilial',fld:'vEMPRESAPADRAOFILIAL'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV47UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV24FilialId',fld:'vFILIALID'},{av:'AV29FilialNome',fld:'vFILIALNOME'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV46AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20VerificarLancamCxaBco',fld:'vVERIFICARLANCAMCXABCO'},{av:'AV21VerificarLancamConPag',fld:'vVERIFICARLANCAMCONPAG'},{av:'AV22VerificarLancamConRec',fld:'vVERIFICARLANCAMCONREC'},{av:'AV30MesRefIni',fld:'vMESREFINI'},{av:'AV31MesRefFim',fld:'vMESREFFIM'},{av:'AV32AnoRefIni',fld:'vANOREFINI'},{av:'AV33AnoRefFim',fld:'vANOREFFIM'},{av:'AV24FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34EmpresaPadraoFilial',fld:'vEMPRESAPADRAOFILIAL'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV25LancamentoCxaBcoHisIdIni',fld:'vLANCAMENTOCXABCOHISIDINI'},{av:'AV27LancamentoCxaBcoHisIdFim',fld:'vLANCAMENTOCXABCOHISIDFIM'},{av:'AV26ContaLancamTpLancamIdIni',fld:'vCONTALANCAMTPLANCAMIDINI'},{av:'AV28ContaLancamTpLancamIdFim',fld:'vCONTALANCAMTPLANCAMIDFIM'},{av:'AV23AtualizarLancamContab',fld:'vATUALIZARLANCAMCONTAB'},{av:'AV38ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV44LancamentoCxaBcoEmpresaId',fld:'vLANCAMENTOCXABCOEMPRESAID'},{av:'AV45SnIntFinCbl',fld:'vSNINTFINCBL'}],[{av:'AV37tpErro',fld:'vTPERRO'},{av:'AV53GXLvl115',fld:'vGXLVL115'}]];
   this.setPrompt("PROMPT_FILIALID", [55]);
   this.setPrompt("PROMPT_LANCAMENTOCXABCOHISIDINI", [65]);
   this.setPrompt("PROMPT_LANCAMENTOCXABCOHISIDFIM", [69]);
   this.setPrompt("PROMPT_CONTALANCAMTPLANCAMIDINI", [77]);
   this.setPrompt("PROMPT_CONTALANCAMTPLANCAMIDFIM", [81]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacertarsituacaocontabil());
