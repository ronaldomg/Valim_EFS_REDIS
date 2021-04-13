/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:0:17.86
*/
gx.evt.autoSkip = false;
gx.define('hmaisfiltrosproduto', false, function () {
   this.ServerClass =  "hmaisfiltrosproduto" ;
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
   };
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
   this.e13on2_client=function()
   {
      this.executeServerEvent("CTLCLASSIFICACAOESTID1.CLICK", true, null, false, true);
   };
   this.e14on2_client=function()
   {
      this.executeServerEvent("CTLCLASSIFICACAOESTID2.CLICK", true, null, false, true);
   };
   this.e15on2_client=function()
   {
      this.executeServerEvent("CTLCLASSIFICACAOESTID3.CLICK", true, null, false, true);
   };
   this.e16on2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17on2_client=function()
   {
      this.executeServerEvent("'LIMPARCAMPOS'", false, null, false, false);
   };
   this.e18on2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e20on2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,16,17,18,21,23,26,28,29,31,34,36,39,42,44,48,52,54,57,60,63,66,69,71,75,79,81,84,87,90,99,102];
   this.GXLastCtrlId =102;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNCMCODIGOMASK",gxz:"ZV35GXV1",gxold:"OV35GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35GXV1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLNCMCODIGOMASK",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLNCMCODIGOMASK",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"PROMPTNCM",grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLNCMDESCRICAO",gxz:"ZV36GXV2",gxold:"OV36GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV36GXV2=Value},v2c:function(){gx.fn.setControlValue("CTLNCMDESCRICAO",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLNCMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNCMCODIGO",gxz:"ZV29NcmCodigo",gxold:"OV29NcmCodigo",gxvar:"AV29NcmCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29NcmCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29NcmCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNCMCODIGO",gx.O.AV29NcmCodigo,0)},c2v:function(){gx.O.AV29NcmCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNCMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTERES",gxz:"ZV27QtCaracteres",gxold:"OV27QtCaracteres",gxvar:"AV27QtCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27QtCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27QtCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTERES",gx.O.AV27QtCaracteres,0)},c2v:function(){gx.O.AV27QtCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCATEGORIA",gxz:"ZV37GXV3",gxold:"OV37GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.GXV3=Value},v2z:function(Value){gx.O.ZV37GXV3=Value},v2c:function(){gx.fn.setComboBoxValue("CTLPRODUTOCATEGORIA",gx.O.GXV3)},c2v:function(){gx.O.GXV3=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTESQUEMA", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLESQUEMACODIGO",gxz:"ZV38GXV4",gxold:"OV38GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38GXV4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLESQUEMACODIGO",gx.O.GXV4,0)},c2v:function(){gx.O.GXV4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLESQUEMADESCRICAO",gxz:"ZV39GXV5",gxold:"OV39GXV5",gxvar:"GXV5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV5=Value},v2z:function(Value){gx.O.ZV39GXV5=Value},v2c:function(){gx.fn.setControlValue("CTLESQUEMADESCRICAO",gx.O.GXV5,0)},c2v:function(){gx.O.GXV5=this.val()},val:function(){return gx.fn.getControlValue("CTLESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE3",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCONTROLAESTOQUE",gxz:"ZV40GXV6",gxold:"OV40GXV6",gxvar:"GXV6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.GXV6=Value},v2z:function(Value){gx.O.ZV40GXV6=Value},v2c:function(){gx.fn.setComboBoxValue("CTLSNCONTROLAESTOQUE",gx.O.GXV6)},c2v:function(){gx.O.GXV6=this.val()},val:function(){return gx.fn.getControlValue("CTLSNCONTROLAESTOQUE")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE6",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOESTID1",gxz:"ZV41GXV7",gxold:"OV41GXV7",gxvar:"GXV7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.GXV7=Value},v2z:function(Value){gx.O.ZV41GXV7=Value},v2c:function(){gx.fn.setComboBoxValue("CTLCODIFICACAOESTID1",gx.O.GXV7)},c2v:function(){gx.O.GXV7=this.val()},val:function(){return gx.fn.getControlValue("CTLCODIFICACAOESTID1")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOESTID2",gxz:"ZV42GXV8",gxold:"OV42GXV8",gxvar:"GXV8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.GXV8=Value},v2z:function(Value){gx.O.ZV42GXV8=Value},v2c:function(){gx.fn.setComboBoxValue("CTLCODIFICACAOESTID2",gx.O.GXV8)},c2v:function(){gx.O.GXV8=this.val()},val:function(){return gx.fn.getControlValue("CTLCODIFICACAOESTID2")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIFICACAOESTID3",gxz:"ZV43GXV9",gxold:"OV43GXV9",gxvar:"GXV9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.GXV9=Value},v2z:function(Value){gx.O.ZV43GXV9=Value},v2c:function(){gx.fn.setComboBoxValue("CTLCODIFICACAOESTID3",gx.O.GXV9)},c2v:function(){gx.O.GXV9=this.val()},val:function(){return gx.fn.getControlValue("CTLCODIFICACAOESTID3")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE7",grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODIFICACAOVALOR1",gxz:"ZV44GXV10",gxold:"OV44GXV10",gxvar:"GXV10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV10=Value},v2z:function(Value){gx.O.ZV44GXV10=Value},v2c:function(){gx.fn.setControlValue("CTLPRODUTOCODIFICACAOVALOR1",gx.O.GXV10,0)},c2v:function(){gx.O.GXV10=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTOCODIFICACAOVALOR1")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODIFICACAOVALOR2",gxz:"ZV45GXV11",gxold:"OV45GXV11",gxvar:"GXV11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV11=Value},v2z:function(Value){gx.O.ZV45GXV11=Value},v2c:function(){gx.fn.setControlValue("CTLPRODUTOCODIFICACAOVALOR2",gx.O.GXV11,0)},c2v:function(){gx.O.GXV11=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTOCODIFICACAOVALOR2")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCODIFICACAOVALOR3",gxz:"ZV46GXV12",gxold:"OV46GXV12",gxvar:"GXV12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV12=Value},v2z:function(Value){gx.O.ZV46GXV12=Value},v2c:function(){gx.fn.setControlValue("CTLPRODUTOCODIFICACAOVALOR3",gx.O.GXV12,0)},c2v:function(){gx.O.GXV12=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTOCODIFICACAOVALOR3")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABLE9",grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOESTID1",gxz:"ZV47GXV13",gxold:"OV47GXV13",gxvar:"GXV13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.GXV13=Value},v2z:function(Value){gx.O.ZV47GXV13=Value},v2c:function(){gx.fn.setComboBoxValue("CTLCLASSIFICACAOESTID1",gx.O.GXV13)},c2v:function(){gx.O.GXV13=this.val()},val:function(){return gx.fn.getControlValue("CTLCLASSIFICACAOESTID1")},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOESTID2",gxz:"ZV48GXV14",gxold:"OV48GXV14",gxvar:"GXV14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.GXV14=Value},v2z:function(Value){gx.O.ZV48GXV14=Value},v2c:function(){gx.fn.setComboBoxValue("CTLCLASSIFICACAOESTID2",gx.O.GXV14)},c2v:function(){gx.O.GXV14=this.val()},val:function(){return gx.fn.getControlValue("CTLCLASSIFICACAOESTID2")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCLASSIFICACAOESTID3",gxz:"ZV49GXV15",gxold:"OV49GXV15",gxvar:"GXV15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.GXV15=Value},v2z:function(Value){gx.O.ZV49GXV15=Value},v2c:function(){gx.fn.setComboBoxValue("CTLCLASSIFICACAOESTID3",gx.O.GXV15)},c2v:function(){gx.O.GXV15=this.val()},val:function(){return gx.fn.getControlValue("CTLCLASSIFICACAOESTID3")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TABLE10",grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCLASSIFICACAOVALOR1",gxz:"ZV50GXV16",gxold:"OV50GXV16",gxvar:"GXV16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.GXV16=Value},v2z:function(Value){gx.O.ZV50GXV16=Value},v2c:function(){gx.fn.setComboBoxValue("CTLPRODUTOCLASSIFICACAOVALOR1",gx.O.GXV16)},c2v:function(){gx.O.GXV16=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTOCLASSIFICACAOVALOR1")},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCLASSIFICACAOVALOR2",gxz:"ZV51GXV17",gxold:"OV51GXV17",gxvar:"GXV17",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.GXV17=Value},v2z:function(Value){gx.O.ZV51GXV17=Value},v2c:function(){gx.fn.setComboBoxValue("CTLPRODUTOCLASSIFICACAOVALOR2",gx.O.GXV17)},c2v:function(){gx.O.GXV17=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTOCLASSIFICACAOVALOR2")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOCLASSIFICACAOVALOR3",gxz:"ZV52GXV18",gxold:"OV52GXV18",gxvar:"GXV18",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.GXV18=Value},v2z:function(Value){gx.O.ZV52GXV18=Value},v2c:function(){gx.fn.setComboBoxValue("CTLPRODUTOCLASSIFICACAOVALOR3",gx.O.GXV18)},c2v:function(){gx.O.GXV18=this.val()},val:function(){return gx.fn.getControlValue("CTLPRODUTOCLASSIFICACAOVALOR3")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"JS", format:2,grid:0};
   GXValidFnc[102]={fld:"PROMPT_GXV4",grid:0};
   this.GXV1 = 0 ;
   this.ZV35GXV1 = 0 ;
   this.OV35GXV1 = 0 ;
   this.GXV2 = "" ;
   this.ZV36GXV2 = "" ;
   this.OV36GXV2 = "" ;
   this.AV29NcmCodigo = 0 ;
   this.ZV29NcmCodigo = 0 ;
   this.OV29NcmCodigo = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV27QtCaracteres = 0 ;
   this.ZV27QtCaracteres = 0 ;
   this.OV27QtCaracteres = 0 ;
   this.GXV3 = "" ;
   this.ZV37GXV3 = "" ;
   this.OV37GXV3 = "" ;
   this.GXV4 = 0 ;
   this.ZV38GXV4 = 0 ;
   this.OV38GXV4 = 0 ;
   this.GXV5 = "" ;
   this.ZV39GXV5 = "" ;
   this.OV39GXV5 = "" ;
   this.GXV6 = "" ;
   this.ZV40GXV6 = "" ;
   this.OV40GXV6 = "" ;
   this.GXV7 = "" ;
   this.ZV41GXV7 = "" ;
   this.OV41GXV7 = "" ;
   this.GXV8 = "" ;
   this.ZV42GXV8 = "" ;
   this.OV42GXV8 = "" ;
   this.GXV9 = "" ;
   this.ZV43GXV9 = "" ;
   this.OV43GXV9 = "" ;
   this.GXV10 = "" ;
   this.ZV44GXV10 = "" ;
   this.OV44GXV10 = "" ;
   this.GXV11 = "" ;
   this.ZV45GXV11 = "" ;
   this.OV45GXV11 = "" ;
   this.GXV12 = "" ;
   this.ZV46GXV12 = "" ;
   this.OV46GXV12 = "" ;
   this.GXV13 = "" ;
   this.ZV47GXV13 = "" ;
   this.OV47GXV13 = "" ;
   this.GXV14 = "" ;
   this.ZV48GXV14 = "" ;
   this.OV48GXV14 = "" ;
   this.GXV15 = "" ;
   this.ZV49GXV15 = "" ;
   this.OV49GXV15 = "" ;
   this.GXV16 = "" ;
   this.ZV50GXV16 = "" ;
   this.OV50GXV16 = "" ;
   this.GXV17 = "" ;
   this.ZV51GXV17 = "" ;
   this.OV51GXV17 = "" ;
   this.GXV18 = "" ;
   this.ZV52GXV18 = "" ;
   this.OV52GXV18 = "" ;
   this.GXV1 = 0 ;
   this.GXV2 = "" ;
   this.AV29NcmCodigo = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.AV27QtCaracteres = 0 ;
   this.GXV3 = "" ;
   this.GXV4 = 0 ;
   this.GXV5 = "" ;
   this.GXV6 = "" ;
   this.GXV7 = "" ;
   this.GXV8 = "" ;
   this.GXV9 = "" ;
   this.GXV10 = "" ;
   this.GXV11 = "" ;
   this.GXV12 = "" ;
   this.GXV13 = "" ;
   this.GXV14 = "" ;
   this.GXV15 = "" ;
   this.GXV16 = "" ;
   this.GXV17 = "" ;
   this.GXV18 = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2979NCMCodigo = 0 ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.A2912EsquemaDescricao = "" ;
   this.Events = {"e13on2_client": ["CTLCLASSIFICACAOESTID1.CLICK", true] ,"e14on2_client": ["CTLCLASSIFICACAOESTID2.CLICK", true] ,"e15on2_client": ["CTLCLASSIFICACAOESTID3.CLICK", true] ,"e16on2_client": ["ENTER", true] ,"e17on2_client": ["'LIMPARCAMPOS'", true] ,"e18on2_client": ["'CANCELAR'", true] ,"e20on2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'A2926OpcaoClassificacaoEstDescricao',fld:'OPCAOCLASSIFICACAOESTDESCRICAO'}],[]];
   this.EvtParms["CTLCLASSIFICACAOESTID1.CLICK"] = [[{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'A2926OpcaoClassificacaoEstDescricao',fld:'OPCAOCLASSIFICACAOESTDESCRICAO'}],[]];
   this.EvtParms["CTLCLASSIFICACAOESTID2.CLICK"] = [[{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'A2926OpcaoClassificacaoEstDescricao',fld:'OPCAOCLASSIFICACAOESTDESCRICAO'}],[]];
   this.EvtParms["CTLCLASSIFICACAOESTID3.CLICK"] = [[{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'},{av:'A2926OpcaoClassificacaoEstDescricao',fld:'OPCAOCLASSIFICACAOESTDESCRICAO'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'},{av:'A2979NCMCodigo',fld:'NCMCODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV32SNConfirmar',fld:'vSNCONFIRMAR'}],[{av:'AV32SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV18SnErro',fld:'vSNERRO'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'},{av:'AV62GXLvl233',fld:'vGXLVL233'},{av:'AV63GXLvl245',fld:'vGXLVL245'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'},{av:'AV31EsquemaUnico',fld:'vESQUEMAUNICO'}],[{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV32SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'}],[{av:'AV32SNConfirmar',fld:'vSNCONFIRMAR'},{av:'AV22ProdutoFiltros',fld:'vPRODUTOFILTROS'}]];
   this.setPrompt("PROMPTNCM", [13]);
   this.setPrompt("PROMPT_GXV4", [28]);
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.addBCProperty("Produtofiltros", ["NCMCodigoMask"], this.GXValidFnc[13], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["NCMDescricao"], this.GXValidFnc[15], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ProdutoCategoria"], this.GXValidFnc[23], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["EsquemaCodigo"], this.GXValidFnc[28], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["EsquemaDescricao"], this.GXValidFnc[29], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["SnControlaEstoque"], this.GXValidFnc[36], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["CodificacaoEstId1"], this.GXValidFnc[44], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["CodificacaoEstId2"], this.GXValidFnc[48], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["CodificacaoEstId3"], this.GXValidFnc[52], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ProdutoCodificacaoValor1"], this.GXValidFnc[57], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ProdutoCodificacaoValor2"], this.GXValidFnc[60], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ProdutoCodificacaoValor3"], this.GXValidFnc[63], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ClassificacaoEstId1"], this.GXValidFnc[71], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ClassificacaoEstId2"], this.GXValidFnc[75], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ClassificacaoEstId3"], this.GXValidFnc[79], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ProdutoClassificacaoValor1"], this.GXValidFnc[84], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ProdutoClassificacaoValor2"], this.GXValidFnc[87], "AV22ProdutoFiltros");
   this.addBCProperty("Produtofiltros", ["ProdutoClassificacaoValor3"], this.GXValidFnc[90], "AV22ProdutoFiltros");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmaisfiltrosproduto());
