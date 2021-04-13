/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:44.69
*/
gx.evt.autoSkip = false;
gx.define('hestatisticatipocategoria', false, function () {
   this.ServerClass =  "hestatisticatipocategoria" ;
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
   this.e11kf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13kf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15kf2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16kf2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17kf2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19kf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,32,37,40,42,45,47,50,53,56,59,62,65,68,71,74,77,86,88,90,91,92,93,94,95,96,97,98,99];
   this.GXLastCtrlId =99;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV66TxtTela",gxold:"OV66TxtTela",gxvar:"AV66TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV66TxtTela=Value},v2z:function(Value){gx.O.ZV66TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV66TxtTela)},c2v:function(){gx.O.AV66TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE6",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPORDENACAO",gxz:"ZV20tpOrdenacao",gxold:"OV20tpOrdenacao",gxvar:"AV20tpOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20tpOrdenacao=Value},v2z:function(Value){gx.O.ZV20tpOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPORDENACAO",gx.O.AV20tpOrdenacao)},c2v:function(){gx.O.AV20tpOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vTPORDENACAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTASSOCIADO",gxz:"ZV42StAssociado",gxold:"OV42StAssociado",gxvar:"AV42StAssociado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42StAssociado=Value},v2z:function(Value){gx.O.ZV42StAssociado=Value},v2c:function(){gx.fn.setComboBoxValue("vSTASSOCIADO",gx.O.AV42StAssociado)},c2v:function(){gx.O.AV42StAssociado=this.val()},val:function(){return gx.fn.getControlValue("vSTASSOCIADO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA1",gxz:"ZV43Categoria1",gxold:"OV43Categoria1",gxvar:"AV43Categoria1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Categoria1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43Categoria1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA1",gx.O.AV43Categoria1,0)},c2v:function(){gx.O.AV43Categoria1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA1",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA2",gxz:"ZV44Categoria2",gxold:"OV44Categoria2",gxvar:"AV44Categoria2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Categoria2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44Categoria2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA2",gx.O.AV44Categoria2,0)},c2v:function(){gx.O.AV44Categoria2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA2",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA3",gxz:"ZV45Categoria3",gxold:"OV45Categoria3",gxvar:"AV45Categoria3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45Categoria3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45Categoria3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA3",gx.O.AV45Categoria3,0)},c2v:function(){gx.O.AV45Categoria3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA3",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA4",gxz:"ZV46Categoria4",gxold:"OV46Categoria4",gxvar:"AV46Categoria4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46Categoria4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46Categoria4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA4",gx.O.AV46Categoria4,0)},c2v:function(){gx.O.AV46Categoria4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA4",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA5",gxz:"ZV47Categoria5",gxold:"OV47Categoria5",gxvar:"AV47Categoria5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47Categoria5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47Categoria5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA5",gx.O.AV47Categoria5,0)},c2v:function(){gx.O.AV47Categoria5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA5",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA6",gxz:"ZV48Categoria6",gxold:"OV48Categoria6",gxvar:"AV48Categoria6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Categoria6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48Categoria6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA6",gx.O.AV48Categoria6,0)},c2v:function(){gx.O.AV48Categoria6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA6",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA7",gxz:"ZV49Categoria7",gxold:"OV49Categoria7",gxvar:"AV49Categoria7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49Categoria7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49Categoria7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA7",gx.O.AV49Categoria7,0)},c2v:function(){gx.O.AV49Categoria7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA7",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA8",gxz:"ZV50Categoria8",gxold:"OV50Categoria8",gxvar:"AV50Categoria8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50Categoria8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50Categoria8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA8",gx.O.AV50Categoria8,0)},c2v:function(){gx.O.AV50Categoria8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA8",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA9",gxz:"ZV51Categoria9",gxold:"OV51Categoria9",gxvar:"AV51Categoria9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Categoria9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51Categoria9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA9",gx.O.AV51Categoria9,0)},c2v:function(){gx.O.AV51Categoria9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA9",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIA10",gxz:"ZV52Categoria10",gxold:"OV52Categoria10",gxvar:"AV52Categoria10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52Categoria10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52Categoria10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIA10",gx.O.AV52Categoria10,0)},c2v:function(){gx.O.AV52Categoria10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIA10",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={fld:"BTNHELP",grid:0};
   GXValidFnc[90]={fld:"PROMPT_CATEGORIA1",grid:0};
   GXValidFnc[91]={fld:"PROMPT_CATEGORIA2",grid:0};
   GXValidFnc[92]={fld:"PROMPT_CATEGORIA3",grid:0};
   GXValidFnc[93]={fld:"PROMPT_CATEGORIA4",grid:0};
   GXValidFnc[94]={fld:"PROMPT_CATEGORIA5",grid:0};
   GXValidFnc[95]={fld:"PROMPT_CATEGORIA6",grid:0};
   GXValidFnc[96]={fld:"PROMPT_CATEGORIA7",grid:0};
   GXValidFnc[97]={fld:"PROMPT_CATEGORIA8",grid:0};
   GXValidFnc[98]={fld:"PROMPT_CATEGORIA9",grid:0};
   GXValidFnc[99]={fld:"PROMPT_CATEGORIA10",grid:0};
   this.AV66TxtTela = "" ;
   this.ZV66TxtTela = "" ;
   this.OV66TxtTela = "" ;
   this.AV20tpOrdenacao = "" ;
   this.ZV20tpOrdenacao = "" ;
   this.OV20tpOrdenacao = "" ;
   this.AV42StAssociado = "" ;
   this.ZV42StAssociado = "" ;
   this.OV42StAssociado = "" ;
   this.AV43Categoria1 = 0 ;
   this.ZV43Categoria1 = 0 ;
   this.OV43Categoria1 = 0 ;
   this.AV44Categoria2 = 0 ;
   this.ZV44Categoria2 = 0 ;
   this.OV44Categoria2 = 0 ;
   this.AV45Categoria3 = 0 ;
   this.ZV45Categoria3 = 0 ;
   this.OV45Categoria3 = 0 ;
   this.AV46Categoria4 = 0 ;
   this.ZV46Categoria4 = 0 ;
   this.OV46Categoria4 = 0 ;
   this.AV47Categoria5 = 0 ;
   this.ZV47Categoria5 = 0 ;
   this.OV47Categoria5 = 0 ;
   this.AV48Categoria6 = 0 ;
   this.ZV48Categoria6 = 0 ;
   this.OV48Categoria6 = 0 ;
   this.AV49Categoria7 = 0 ;
   this.ZV49Categoria7 = 0 ;
   this.OV49Categoria7 = 0 ;
   this.AV50Categoria8 = 0 ;
   this.ZV50Categoria8 = 0 ;
   this.OV50Categoria8 = 0 ;
   this.AV51Categoria9 = 0 ;
   this.ZV51Categoria9 = 0 ;
   this.OV51Categoria9 = 0 ;
   this.AV52Categoria10 = 0 ;
   this.ZV52Categoria10 = 0 ;
   this.OV52Categoria10 = 0 ;
   this.AV66TxtTela = "" ;
   this.AV20tpOrdenacao = "" ;
   this.AV42StAssociado = "" ;
   this.AV43Categoria1 = 0 ;
   this.AV44Categoria2 = 0 ;
   this.AV45Categoria3 = 0 ;
   this.AV46Categoria4 = 0 ;
   this.AV47Categoria5 = 0 ;
   this.AV48Categoria6 = 0 ;
   this.AV49Categoria7 = 0 ;
   this.AV50Categoria8 = 0 ;
   this.AV51Categoria9 = 0 ;
   this.AV52Categoria10 = 0 ;
   this.A2622CategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.Events = {"e11kf2_client": ["'FECHAR'", true] ,"e13kf2_client": ["ENTER", true] ,"e15kf2_client": ["'SALVARTXT'", true] ,"e16kf2_client": ["VTXTTELA.CLICK", true] ,"e17kf2_client": ["'EXCLUIRTXT'", true] ,"e19kf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV82SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV66TxtTela',fld:'vTXTTELA'}],[{av:'AV66TxtTela',fld:'vTXTTELA'},{av:'AV90GXV2',fld:'vGXV2'},{av:'AV83SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV89GXV1',fld:'vGXV1'},{av:'AV43Categoria1',fld:'vCATEGORIA1'},{av:'AV44Categoria2',fld:'vCATEGORIA2'},{av:'AV45Categoria3',fld:'vCATEGORIA3'},{av:'AV46Categoria4',fld:'vCATEGORIA4'},{av:'AV47Categoria5',fld:'vCATEGORIA5'},{av:'AV48Categoria6',fld:'vCATEGORIA6'},{av:'AV49Categoria7',fld:'vCATEGORIA7'},{av:'AV50Categoria8',fld:'vCATEGORIA8'},{av:'AV51Categoria9',fld:'vCATEGORIA9'},{av:'AV52Categoria10',fld:'vCATEGORIA10'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV53TpErro',fld:'vTPERRO'},{av:'AV66TxtTela',fld:'vTXTTELA'},{av:'AV78SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV20tpOrdenacao',fld:'vTPORDENACAO'},{av:'AV42StAssociado',fld:'vSTASSOCIADO'},{av:'AV43Categoria1',fld:'vCATEGORIA1'},{av:'AV44Categoria2',fld:'vCATEGORIA2'},{av:'AV45Categoria3',fld:'vCATEGORIA3'},{av:'AV46Categoria4',fld:'vCATEGORIA4'},{av:'AV47Categoria5',fld:'vCATEGORIA5'},{av:'AV48Categoria6',fld:'vCATEGORIA6'},{av:'AV49Categoria7',fld:'vCATEGORIA7'},{av:'AV50Categoria8',fld:'vCATEGORIA8'},{av:'AV51Categoria9',fld:'vCATEGORIA9'},{av:'AV52Categoria10',fld:'vCATEGORIA10'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV87Pgmdesc',fld:'vPGMDESC'},{av:'AV55CategoriaAux',fld:'vCATEGORIAAUX'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV56EmpresaCategoria',fld:'vEMPRESACATEGORIA'},{av:'A2622CategoriaId',fld:'CATEGORIAID'}],[{av:'AV66TxtTela',fld:'vTXTTELA'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV52Categoria10',fld:'vCATEGORIA10'},{av:'AV51Categoria9',fld:'vCATEGORIA9'},{av:'AV50Categoria8',fld:'vCATEGORIA8'},{av:'AV49Categoria7',fld:'vCATEGORIA7'},{av:'AV48Categoria6',fld:'vCATEGORIA6'},{av:'AV47Categoria5',fld:'vCATEGORIA5'},{av:'AV46Categoria4',fld:'vCATEGORIA4'},{av:'AV45Categoria3',fld:'vCATEGORIA3'},{av:'AV44Categoria2',fld:'vCATEGORIA2'},{av:'AV43Categoria1',fld:'vCATEGORIA1'},{av:'AV42StAssociado',fld:'vSTASSOCIADO'},{av:'AV20tpOrdenacao',fld:'vTPORDENACAO'},{av:'AV53TpErro',fld:'vTPERRO'},{av:'AV54x',fld:'vX'},{av:'AV55CategoriaAux',fld:'vCATEGORIAAUX'},{av:'AV88GXLvl109',fld:'vGXLVL109'},{av:'AV81OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV66TxtTela',fld:'vTXTTELA'},{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV43Categoria1',fld:'vCATEGORIA1'},{av:'AV44Categoria2',fld:'vCATEGORIA2'},{av:'AV45Categoria3',fld:'vCATEGORIA3'},{av:'AV46Categoria4',fld:'vCATEGORIA4'},{av:'AV47Categoria5',fld:'vCATEGORIA5'},{av:'AV48Categoria6',fld:'vCATEGORIA6'},{av:'AV49Categoria7',fld:'vCATEGORIA7'},{av:'AV50Categoria8',fld:'vCATEGORIA8'},{av:'AV51Categoria9',fld:'vCATEGORIA9'},{av:'AV52Categoria10',fld:'vCATEGORIA10'}],[{av:'AV81OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV82SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV66TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV89GXV1',fld:'vGXV1'},{av:'AV83SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV43Categoria1',fld:'vCATEGORIA1'},{av:'AV44Categoria2',fld:'vCATEGORIA2'},{av:'AV45Categoria3',fld:'vCATEGORIA3'},{av:'AV46Categoria4',fld:'vCATEGORIA4'},{av:'AV47Categoria5',fld:'vCATEGORIA5'},{av:'AV48Categoria6',fld:'vCATEGORIA6'},{av:'AV49Categoria7',fld:'vCATEGORIA7'},{av:'AV50Categoria8',fld:'vCATEGORIA8'},{av:'AV51Categoria9',fld:'vCATEGORIA9'},{av:'AV52Categoria10',fld:'vCATEGORIA10'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV66TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_CATEGORIA1", [50]);
   this.setPrompt("PROMPT_CATEGORIA2", [53]);
   this.setPrompt("PROMPT_CATEGORIA3", [56]);
   this.setPrompt("PROMPT_CATEGORIA4", [59]);
   this.setPrompt("PROMPT_CATEGORIA5", [62]);
   this.setPrompt("PROMPT_CATEGORIA6", [65]);
   this.setPrompt("PROMPT_CATEGORIA7", [68]);
   this.setPrompt("PROMPT_CATEGORIA8", [71]);
   this.setPrompt("PROMPT_CATEGORIA9", [74]);
   this.setPrompt("PROMPT_CATEGORIA10", [77]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hestatisticatipocategoria());
