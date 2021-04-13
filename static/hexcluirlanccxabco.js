/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:34.32
*/
gx.evt.autoSkip = false;
gx.define('hexcluirlanccxabco', false, function () {
   this.ServerClass =  "hexcluirlanccxabco" ;
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
   this.Validv_Caixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11bz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,16,18,19,22,24,27,29,31,34,36,39,41,43,46,48,51,53,55,61,67,68,69,71,73,74,75];
   this.GXLastCtrlId =75;
   GXValidFnc[3]={fld:"TABLE11",grid:0};
   GXValidFnc[6]={fld:"TABLE9",grid:0};
   GXValidFnc[9]={fld:"TABLE12",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV19CaixaBancoId",gxold:"OV19CaixaBancoId",gxvar:"AV19CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV19CaixaBancoId,0)},c2v:function(){gx.O.AV19CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV26CaixaBancoDescricao",gxold:"OV26CaixaBancoDescricao",gxvar:"AV26CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV26CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV26CaixaBancoDescricao,0)},c2v:function(){gx.O.AV26CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE15",grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCODATAINI",gxz:"ZV20LancamentoCxaBcoDataIni",gxold:"OV20LancamentoCxaBcoDataIni",gxvar:"AV20LancamentoCxaBcoDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODATAINI",gx.O.AV20LancamentoCxaBcoDataIni,0)},c2v:function(){gx.O.AV20LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODATAINI")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCODATAFIM",gxz:"ZV21LancamentoCxaBcoDataFim",gxold:"OV21LancamentoCxaBcoDataFim",gxvar:"AV21LancamentoCxaBcoDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODATAFIM",gx.O.AV21LancamentoCxaBcoDataFim,0)},c2v:function(){gx.O.AV21LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODATAFIM")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE14",grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCONUMEROINI",gxz:"ZV22LancamentoCxaBcoNumeroIni",gxold:"OV22LancamentoCxaBcoNumeroIni",gxvar:"AV22LancamentoCxaBcoNumeroIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LancamentoCxaBcoNumeroIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22LancamentoCxaBcoNumeroIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCONUMEROINI",gx.O.AV22LancamentoCxaBcoNumeroIni,0)},c2v:function(){gx.O.AV22LancamentoCxaBcoNumeroIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCONUMEROINI",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCONUMEROFIM",gxz:"ZV23LancamentoCxaBcoNumeroFim",gxold:"OV23LancamentoCxaBcoNumeroFim",gxvar:"AV23LancamentoCxaBcoNumeroFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23LancamentoCxaBcoNumeroFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23LancamentoCxaBcoNumeroFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCONUMEROFIM",gx.O.AV23LancamentoCxaBcoNumeroFim,0)},c2v:function(){gx.O.AV23LancamentoCxaBcoNumeroFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCONUMEROFIM",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE13",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOHISIDINI",gxz:"ZV24LancamentoCxaBcoHisIdIni",gxold:"OV24LancamentoCxaBcoHisIdIni",gxvar:"AV24LancamentoCxaBcoHisIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24LancamentoCxaBcoHisIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24LancamentoCxaBcoHisIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOHISIDINI",gx.O.AV24LancamentoCxaBcoHisIdIni,0)},c2v:function(){gx.O.AV24LancamentoCxaBcoHisIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCOHISIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOHISIDFIM",gxz:"ZV25LancamentoCxaBcoHisIdFim",gxold:"OV25LancamentoCxaBcoHisIdFim",gxvar:"AV25LancamentoCxaBcoHisIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25LancamentoCxaBcoHisIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25LancamentoCxaBcoHisIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCOHISIDFIM",gx.O.AV25LancamentoCxaBcoHisIdFim,0)},c2v:function(){gx.O.AV25LancamentoCxaBcoHisIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCOHISIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE10",grid:0};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV35AcessoSistemaSequencia",gxold:"OV35AcessoSistemaSequencia",gxvar:"AV35AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV35AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV35AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[71]={fld:"BTNHELP",grid:0};
   GXValidFnc[73]={fld:"PROMPT_CAIXABANCOID",grid:0};
   GXValidFnc[74]={fld:"PROMPT_LANCAMENTOCXABCOHISIDINI",grid:0};
   GXValidFnc[75]={fld:"PROMPT_LANCAMENTOCXABCOHISIDFIM",grid:0};
   this.AV19CaixaBancoId = 0 ;
   this.ZV19CaixaBancoId = 0 ;
   this.OV19CaixaBancoId = 0 ;
   this.AV26CaixaBancoDescricao = "" ;
   this.ZV26CaixaBancoDescricao = "" ;
   this.OV26CaixaBancoDescricao = "" ;
   this.AV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.ZV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.OV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.AV21LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.ZV21LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.OV21LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.AV22LancamentoCxaBcoNumeroIni = 0 ;
   this.ZV22LancamentoCxaBcoNumeroIni = 0 ;
   this.OV22LancamentoCxaBcoNumeroIni = 0 ;
   this.AV23LancamentoCxaBcoNumeroFim = 0 ;
   this.ZV23LancamentoCxaBcoNumeroFim = 0 ;
   this.OV23LancamentoCxaBcoNumeroFim = 0 ;
   this.AV24LancamentoCxaBcoHisIdIni = 0 ;
   this.ZV24LancamentoCxaBcoHisIdIni = 0 ;
   this.OV24LancamentoCxaBcoHisIdIni = 0 ;
   this.AV25LancamentoCxaBcoHisIdFim = 0 ;
   this.ZV25LancamentoCxaBcoHisIdFim = 0 ;
   this.OV25LancamentoCxaBcoHisIdFim = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV35AcessoSistemaSequencia = 0 ;
   this.ZV35AcessoSistemaSequencia = 0 ;
   this.OV35AcessoSistemaSequencia = 0 ;
   this.AV19CaixaBancoId = 0 ;
   this.AV26CaixaBancoDescricao = "" ;
   this.AV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.AV21LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.AV22LancamentoCxaBcoNumeroIni = 0 ;
   this.AV23LancamentoCxaBcoNumeroFim = 0 ;
   this.AV24LancamentoCxaBcoHisIdIni = 0 ;
   this.AV25LancamentoCxaBcoHisIdFim = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.AV35AcessoSistemaSequencia = 0 ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.Events = {"e11bz2_client": ["'FECHAR'", true] ,"e13bz2_client": ["ENTER", true] ,"e15bz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV19CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV29DataNula',fld:'vDATANULA'},{av:'AV20LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV21LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV22LancamentoCxaBcoNumeroIni',fld:'vLANCAMENTOCXABCONUMEROINI'},{av:'AV23LancamentoCxaBcoNumeroFim',fld:'vLANCAMENTOCXABCONUMEROFIM'},{av:'AV24LancamentoCxaBcoHisIdIni',fld:'vLANCAMENTOCXABCOHISIDINI'},{av:'AV25LancamentoCxaBcoHisIdFim',fld:'vLANCAMENTOCXABCOHISIDFIM'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'}],[{av:'AV26CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV30ErroCxaBco',fld:'vERROCXABCO'},{av:'AV20LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV21LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV33ErroDataLanc',fld:'vERRODATALANC'},{av:'AV32DataInicial',fld:'vDATAINICIAL'},{av:'AV22LancamentoCxaBcoNumeroIni',fld:'vLANCAMENTOCXABCONUMEROINI'},{av:'AV23LancamentoCxaBcoNumeroFim',fld:'vLANCAMENTOCXABCONUMEROFIM'},{av:'AV24LancamentoCxaBcoHisIdIni',fld:'vLANCAMENTOCXABCOHISIDINI'},{av:'AV25LancamentoCxaBcoHisIdFim',fld:'vLANCAMENTOCXABCOHISIDFIM'},{av:'AV19CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV14Ordenacao',fld:'vORDENACAO'}]];
   this.setPrompt("PROMPT_CAIXABANCOID", [18]);
   this.setPrompt("PROMPT_LANCAMENTOCXABCOHISIDINI", [51]);
   this.setPrompt("PROMPT_LANCAMENTOCXABCOHISIDFIM", [55]);
   this.EnterCtrl = ["BTNENTER"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexcluirlanccxabco());
