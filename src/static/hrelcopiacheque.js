/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:32.61
*/
gx.evt.autoSkip = false;
gx.define('hrelcopiacheque', false, function () {
   this.ServerClass =  "hrelcopiacheque" ;
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
   this.Validv_Empresapadraocxabco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCXABCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11by2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13by2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15by2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16by2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17by2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19by2_client=function()
   {
      this.executeServerEvent("VTIPOS.CLICK", true, null, false, true);
   };
   this.e20by2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,30,32,34,37,39,41,46,51,56,61,64,66,67,71,73,76,78,80,84,86,89,91,93,103,104,106,107];
   this.GXLastCtrlId =107;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV49TxtTela",gxold:"OV49TxtTela",gxvar:"AV49TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV49TxtTela=Value},v2z:function(Value){gx.O.ZV49TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV49TxtTela)},c2v:function(){gx.O.AV49TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE2",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOS",gxz:"ZV18Tipos",gxold:"OV18Tipos",gxvar:"AV18Tipos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Tipos=Value},v2z:function(Value){gx.O.ZV18Tipos=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOS",gx.O.AV18Tipos)},c2v:function(){gx.O.AV18Tipos=this.val()},val:function(){return gx.fn.getControlValue("vTIPOS")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESPASSINATURA",gxz:"ZV24EspAssinatura",gxold:"OV24EspAssinatura",gxvar:"AV24EspAssinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24EspAssinatura=Value},v2z:function(Value){gx.O.ZV24EspAssinatura=Value},v2c:function(){gx.fn.setCheckBoxValue("vESPASSINATURA",gx.O.AV24EspAssinatura,"S")},c2v:function(){gx.O.AV24EspAssinatura=this.val()},val:function(){return gx.fn.getControlValue("vESPASSINATURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOIMPRESSAO",gxz:"ZV39ModeloImpressao",gxold:"OV39ModeloImpressao",gxvar:"AV39ModeloImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV39ModeloImpressao=Value},v2z:function(Value){gx.O.ZV39ModeloImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOIMPRESSAO",gx.O.AV39ModeloImpressao)},c2v:function(){gx.O.AV39ModeloImpressao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPDATAASSINATURA",gxz:"ZV28ImpDataAssinatura",gxold:"OV28ImpDataAssinatura",gxvar:"AV28ImpDataAssinatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV28ImpDataAssinatura=Value},v2z:function(Value){gx.O.ZV28ImpDataAssinatura=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPDATAASSINATURA",gx.O.AV28ImpDataAssinatura,"S")},c2v:function(){gx.O.AV28ImpDataAssinatura=this.val()},val:function(){return gx.fn.getControlValue("vIMPDATAASSINATURA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPFORNECOBS",gxz:"ZV25ImpFornecObs",gxold:"OV25ImpFornecObs",gxvar:"AV25ImpFornecObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV25ImpFornecObs=Value},v2z:function(Value){gx.O.ZV25ImpFornecObs=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPFORNECOBS",gx.O.AV25ImpFornecObs,"S")},c2v:function(){gx.O.AV25ImpFornecObs=this.val()},val:function(){return gx.fn.getControlValue("vIMPFORNECOBS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMPFORNECCHQPORT",gxz:"ZV26ImpFornecChqPort",gxold:"OV26ImpFornecChqPort",gxvar:"AV26ImpFornecChqPort",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV26ImpFornecChqPort=Value},v2z:function(Value){gx.O.ZV26ImpFornecChqPort=Value},v2c:function(){gx.fn.setCheckBoxValue("vIMPFORNECCHQPORT",gx.O.AV26ImpFornecChqPort,"S")},c2v:function(){gx.O.AV26ImpFornecChqPort=this.val()},val:function(){return gx.fn.getControlValue("vIMPFORNECCHQPORT")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNDADOSCONVENIO",gxz:"ZV38SnDadosConvenio",gxold:"OV38SnDadosConvenio",gxvar:"AV38SnDadosConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV38SnDadosConvenio=Value},v2z:function(Value){gx.O.ZV38SnDadosConvenio=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNDADOSCONVENIO",gx.O.AV38SnDadosConvenio,"S")},c2v:function(){gx.O.AV38SnDadosConvenio=this.val()},val:function(){return gx.fn.getControlValue("vSNDADOSCONVENIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[61]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV19CaixaBancoId",gxold:"OV19CaixaBancoId",gxvar:"AV19CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV19CaixaBancoId,0)},c2v:function(){gx.O.AV19CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV33CaixaBancoDescricao",gxold:"OV33CaixaBancoDescricao",gxvar:"AV33CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV33CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV33CaixaBancoDescricao,0)},c2v:function(){gx.O.AV33CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[73]={fld:"TABLE8",grid:0};
   GXValidFnc[76]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCODATAINI",gxz:"ZV20LancamentoCxaBcoDataIni",gxold:"OV20LancamentoCxaBcoDataIni",gxvar:"AV20LancamentoCxaBcoDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODATAINI",gx.O.AV20LancamentoCxaBcoDataIni,0)},c2v:function(){gx.O.AV20LancamentoCxaBcoDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODATAINI")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCODATAFIM",gxz:"ZV22LancamentoCxaBcoDataFim",gxold:"OV22LancamentoCxaBcoDataFim",gxvar:"AV22LancamentoCxaBcoDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCODATAFIM",gx.O.AV22LancamentoCxaBcoDataFim,0)},c2v:function(){gx.O.AV22LancamentoCxaBcoDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCXABCODATAFIM")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[86]={fld:"TABLE9",grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCONOCHEQUEINI",gxz:"ZV21LancamentoCxaBcoNoChequeIni",gxold:"OV21LancamentoCxaBcoNoChequeIni",gxvar:"AV21LancamentoCxaBcoNoChequeIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21LancamentoCxaBcoNoChequeIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21LancamentoCxaBcoNoChequeIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCONOCHEQUEINI",gx.O.AV21LancamentoCxaBcoNoChequeIni,0)},c2v:function(){gx.O.AV21LancamentoCxaBcoNoChequeIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCONOCHEQUEINI",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCONOCHEQUEFIM",gxz:"ZV23LancamentoCxaBcoNoChequeFim",gxold:"OV23LancamentoCxaBcoNoChequeFim",gxvar:"AV23LancamentoCxaBcoNoChequeFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23LancamentoCxaBcoNoChequeFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23LancamentoCxaBcoNoChequeFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCXABCONOCHEQUEFIM",gx.O.AV23LancamentoCxaBcoNoChequeFim,0)},c2v:function(){gx.O.AV23LancamentoCxaBcoNoChequeFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCXABCONOCHEQUEFIM",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"JS", format:2,grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocxabco,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCXABCO",gxz:"ZV29EmpresaPadraoCxaBco",gxold:"OV29EmpresaPadraoCxaBco",gxvar:"AV29EmpresaPadraoCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EmpresaPadraoCxaBco=Value},v2z:function(Value){gx.O.ZV29EmpresaPadraoCxaBco=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCXABCO",gx.O.AV29EmpresaPadraoCxaBco,0)},c2v:function(){gx.O.AV29EmpresaPadraoCxaBco=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCXABCO")},nac:gx.falseFn};
   GXValidFnc[106]={fld:"BTNHELP",grid:0};
   GXValidFnc[107]={fld:"PROMPT_CAIXABANCOID",grid:0};
   this.AV49TxtTela = "" ;
   this.ZV49TxtTela = "" ;
   this.OV49TxtTela = "" ;
   this.AV18Tipos = "" ;
   this.ZV18Tipos = "" ;
   this.OV18Tipos = "" ;
   this.AV24EspAssinatura = "" ;
   this.ZV24EspAssinatura = "" ;
   this.OV24EspAssinatura = "" ;
   this.AV39ModeloImpressao = "" ;
   this.ZV39ModeloImpressao = "" ;
   this.OV39ModeloImpressao = "" ;
   this.AV28ImpDataAssinatura = "" ;
   this.ZV28ImpDataAssinatura = "" ;
   this.OV28ImpDataAssinatura = "" ;
   this.AV25ImpFornecObs = "" ;
   this.ZV25ImpFornecObs = "" ;
   this.OV25ImpFornecObs = "" ;
   this.AV26ImpFornecChqPort = "" ;
   this.ZV26ImpFornecChqPort = "" ;
   this.OV26ImpFornecChqPort = "" ;
   this.AV38SnDadosConvenio = "" ;
   this.ZV38SnDadosConvenio = "" ;
   this.OV38SnDadosConvenio = "" ;
   this.AV19CaixaBancoId = 0 ;
   this.ZV19CaixaBancoId = 0 ;
   this.OV19CaixaBancoId = 0 ;
   this.AV33CaixaBancoDescricao = "" ;
   this.ZV33CaixaBancoDescricao = "" ;
   this.OV33CaixaBancoDescricao = "" ;
   this.AV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.ZV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.OV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.AV22LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.ZV22LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.OV22LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.AV21LancamentoCxaBcoNoChequeIni = 0 ;
   this.ZV21LancamentoCxaBcoNoChequeIni = 0 ;
   this.OV21LancamentoCxaBcoNoChequeIni = 0 ;
   this.AV23LancamentoCxaBcoNoChequeFim = 0 ;
   this.ZV23LancamentoCxaBcoNoChequeFim = 0 ;
   this.OV23LancamentoCxaBcoNoChequeFim = 0 ;
   this.AV29EmpresaPadraoCxaBco = "" ;
   this.ZV29EmpresaPadraoCxaBco = "" ;
   this.OV29EmpresaPadraoCxaBco = "" ;
   this.AV49TxtTela = "" ;
   this.AV18Tipos = "" ;
   this.AV24EspAssinatura = "" ;
   this.AV39ModeloImpressao = "" ;
   this.AV28ImpDataAssinatura = "" ;
   this.AV25ImpFornecObs = "" ;
   this.AV26ImpFornecChqPort = "" ;
   this.AV38SnDadosConvenio = "" ;
   this.AV19CaixaBancoId = 0 ;
   this.AV33CaixaBancoDescricao = "" ;
   this.AV20LancamentoCxaBcoDataIni = gx.date.nullDate() ;
   this.AV22LancamentoCxaBcoDataFim = gx.date.nullDate() ;
   this.AV21LancamentoCxaBcoNoChequeIni = 0 ;
   this.AV23LancamentoCxaBcoNoChequeFim = 0 ;
   this.AV29EmpresaPadraoCxaBco = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.Events = {"e11by2_client": ["'FECHAR'", true] ,"e13by2_client": ["ENTER", true] ,"e15by2_client": ["'SALVARTXT'", true] ,"e16by2_client": ["VTXTTELA.CLICK", true] ,"e17by2_client": ["'EXCLUIRTXT'", true] ,"e19by2_client": ["VTIPOS.CLICK", true] ,"e20by2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV18Tipos',fld:'vTIPOS'},{av:'AV75Pgmname',fld:'vPGMNAME'},{av:'AV70SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV49TxtTela',fld:'vTXTTELA'}],[{av:'AV24EspAssinatura',fld:'vESPASSINATURA'},{av:'AV28ImpDataAssinatura',fld:'vIMPDATAASSINATURA'},{av:'AV25ImpFornecObs',fld:'vIMPFORNECOBS'},{av:'gx.fn.getCtrlProperty("vESPASSINATURA","Enabled")',ctrl:'vESPASSINATURA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPDATAASSINATURA","Enabled")',ctrl:'vIMPDATAASSINATURA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPFORNECOBS","Enabled")',ctrl:'vIMPFORNECOBS',prop:'Enabled'},{av:'AV49TxtTela',fld:'vTXTTELA'},{av:'AV79GXV2',fld:'vGXV2'},{av:'AV71SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV78GXV1',fld:'vGXV1'},{av:'AV18Tipos',fld:'vTIPOS'},{av:'AV26ImpFornecChqPort',fld:'vIMPFORNECCHQPORT'},{av:'AV38SnDadosConvenio',fld:'vSNDADOSCONVENIO'},{av:'AV39ModeloImpressao',fld:'vMODELOIMPRESSAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV29EmpresaPadraoCxaBco',fld:'vEMPRESAPADRAOCXABCO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV19CaixaBancoId',fld:'vCAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV34DataNula',fld:'vDATANULA'},{av:'AV20LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV22LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV21LancamentoCxaBcoNoChequeIni',fld:'vLANCAMENTOCXABCONOCHEQUEINI'},{av:'AV23LancamentoCxaBcoNoChequeFim',fld:'vLANCAMENTOCXABCONOCHEQUEFIM'},{av:'AV63ParmRelat',fld:'vPARMRELAT'},{av:'AV76Pgmdesc',fld:'vPGMDESC'},{av:'AV38SnDadosConvenio',fld:'vSNDADOSCONVENIO'},{av:'AV28ImpDataAssinatura',fld:'vIMPDATAASSINATURA'},{av:'AV26ImpFornecChqPort',fld:'vIMPFORNECCHQPORT'},{av:'AV25ImpFornecObs',fld:'vIMPFORNECOBS'},{av:'AV24EspAssinatura',fld:'vESPASSINATURA'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV18Tipos',fld:'vTIPOS'},{av:'AV39ModeloImpressao',fld:'vMODELOIMPRESSAO'},{av:'AV75Pgmname',fld:'vPGMNAME'},{av:'AV49TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV33CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV35ErroCxaBco',fld:'vERROCXABCO'},{av:'AV22LancamentoCxaBcoDataFim',fld:'vLANCAMENTOCXABCODATAFIM'},{av:'AV23LancamentoCxaBcoNoChequeFim',fld:'vLANCAMENTOCXABCONOCHEQUEFIM'},{av:'AV65SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV38SnDadosConvenio',fld:'vSNDADOSCONVENIO'},{av:'AV28ImpDataAssinatura',fld:'vIMPDATAASSINATURA'},{av:'AV26ImpFornecChqPort',fld:'vIMPFORNECCHQPORT'},{av:'AV25ImpFornecObs',fld:'vIMPFORNECOBS'},{av:'AV24EspAssinatura',fld:'vESPASSINATURA'},{av:'AV21LancamentoCxaBcoNoChequeIni',fld:'vLANCAMENTOCXABCONOCHEQUEINI'},{av:'AV20LancamentoCxaBcoDataIni',fld:'vLANCAMENTOCXABCODATAINI'},{av:'AV19CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV72Orientacao',fld:'vORIENTACAO'},{av:'AV64NomeProc',fld:'vNOMEPROC'},{av:'AV63ParmRelat',fld:'vPARMRELAT'},{av:'AV61Random',fld:'vRANDOM'},{av:'AV62NomeSessao',fld:'vNOMESESSAO'},{av:'AV69OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTIPOS.CLICK"] = [[{av:'AV18Tipos',fld:'vTIPOS'}],[{av:'gx.fn.getCtrlProperty("vESPASSINATURA","Enabled")',ctrl:'vESPASSINATURA',prop:'Enabled'},{av:'AV24EspAssinatura',fld:'vESPASSINATURA'},{av:'gx.fn.getCtrlProperty("vIMPDATAASSINATURA","Enabled")',ctrl:'vIMPDATAASSINATURA',prop:'Enabled'},{av:'AV28ImpDataAssinatura',fld:'vIMPDATAASSINATURA'},{av:'gx.fn.getCtrlProperty("vIMPFORNECOBS","Enabled")',ctrl:'vIMPFORNECOBS',prop:'Enabled'},{av:'AV25ImpFornecObs',fld:'vIMPFORNECOBS'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV49TxtTela',fld:'vTXTTELA'},{av:'AV75Pgmname',fld:'vPGMNAME'},{av:'AV18Tipos',fld:'vTIPOS'},{av:'AV24EspAssinatura',fld:'vESPASSINATURA'},{av:'AV28ImpDataAssinatura',fld:'vIMPDATAASSINATURA'},{av:'AV25ImpFornecObs',fld:'vIMPFORNECOBS'},{av:'AV26ImpFornecChqPort',fld:'vIMPFORNECCHQPORT'},{av:'AV38SnDadosConvenio',fld:'vSNDADOSCONVENIO'},{av:'AV39ModeloImpressao',fld:'vMODELOIMPRESSAO'}],[{av:'AV69OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV75Pgmname',fld:'vPGMNAME'},{av:'AV70SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV49TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV78GXV1',fld:'vGXV1'},{av:'AV71SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV18Tipos',fld:'vTIPOS'},{av:'AV24EspAssinatura',fld:'vESPASSINATURA'},{av:'AV28ImpDataAssinatura',fld:'vIMPDATAASSINATURA'},{av:'AV25ImpFornecObs',fld:'vIMPFORNECOBS'},{av:'AV26ImpFornecChqPort',fld:'vIMPFORNECCHQPORT'},{av:'AV38SnDadosConvenio',fld:'vSNDADOSCONVENIO'},{av:'AV39ModeloImpressao',fld:'vMODELOIMPRESSAO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV75Pgmname',fld:'vPGMNAME'},{av:'AV49TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CAIXABANCOID", [66]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelcopiacheque());
