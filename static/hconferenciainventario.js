/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:18.28
*/
gx.evt.autoSkip = false;
gx.define('hconferenciainventario', false, function () {
   this.ServerClass =  "hconferenciainventario" ;
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
   this.Validv_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11y42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13y42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15y42_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,21,23,26,28,31,33,34,35,38,40,41,44,46,49,51,52,55,57,60,62,66,70,74,79,82,85,87,90,93,95,97,99,102,104,106,111,114,117,119,121,123,126,128,130,134,136,139,141,143,146,148,151,153,155,158,160,163,165,167,169,171,173,175,177,179,181,184,186,194,197,198,199,200,202,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223];
   this.GXLastCtrlId =223;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV23TpRelatorio",gxold:"OV23TpRelatorio",gxvar:"AV23TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23TpRelatorio=Value},v2z:function(Value){gx.O.ZV23TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV23TpRelatorio)},c2v:function(){gx.O.AV23TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPORDENACAO",gxz:"ZV26TpOrdenacao",gxold:"OV26TpOrdenacao",gxvar:"AV26TpOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26TpOrdenacao=Value},v2z:function(Value){gx.O.ZV26TpOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPORDENACAO",gx.O.AV26TpOrdenacao)},c2v:function(){gx.O.AV26TpOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vTPORDENACAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV24FilialId",gxold:"OV24FilialId",gxvar:"AV24FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV24FilialId,0)},c2v:function(){gx.O.AV24FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV45FilialNome",gxold:"OV45FilialNome",gxvar:"AV45FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45FilialNome=Value},v2z:function(Value){gx.O.ZV45FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV45FilialNome,0)},c2v:function(){gx.O.AV45FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV40FilialEmpresaId",gxold:"OV40FilialEmpresaId",gxvar:"AV40FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV40FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV40FilialEmpresaId,0)},c2v:function(){gx.O.AV40FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINVENTARIO",gxz:"ZV25DtInventario",gxold:"OV25DtInventario",gxvar:"AV25DtInventario",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DtInventario=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DtInventario=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINVENTARIO",gx.O.AV25DtInventario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DtInventario=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINVENTARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={fld:"PROMPTINVENTARIO",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINVENTARIOSEQCONTAGEM",gxz:"ZV83InventarioSeqContagem",gxold:"OV83InventarioSeqContagem",gxvar:"AV83InventarioSeqContagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83InventarioSeqContagem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83InventarioSeqContagem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINVENTARIOSEQCONTAGEM",gx.O.AV83InventarioSeqContagem,0)},c2v:function(){gx.O.AV83InventarioSeqContagem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINVENTARIOSEQCONTAGEM",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"LBLESQUEMA", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV54EsquemaCodigo",gxold:"OV54EsquemaCodigo",gxvar:"AV54EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV54EsquemaCodigo,0)},c2v:function(){gx.O.AV54EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESQUEMADESCRICAO",gxz:"ZV55EsquemaDescricao",gxold:"OV55EsquemaDescricao",gxvar:"AV55EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55EsquemaDescricao=Value},v2z:function(Value){gx.O.ZV55EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vESQUEMADESCRICAO",gx.O.AV55EsquemaDescricao,0)},c2v:function(){gx.O.AV55EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTINVENTARIO",gxz:"ZV53StInventario",gxold:"OV53StInventario",gxvar:"AV53StInventario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV53StInventario=Value},v2z:function(Value){gx.O.ZV53StInventario=Value},v2c:function(){gx.fn.setComboBoxValue("vSTINVENTARIO",gx.O.AV53StInventario)},c2v:function(){gx.O.AV53StInventario=this.val()},val:function(){return gx.fn.getControlValue("vSTINVENTARIO")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCONFSALDO",gxz:"ZV27TpConfSaldo",gxold:"OV27TpConfSaldo",gxvar:"AV27TpConfSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27TpConfSaldo=Value},v2z:function(Value){gx.O.ZV27TpConfSaldo=Value},v2c:function(){gx.fn.setComboBoxValue("vTPCONFSALDO",gx.O.AV27TpConfSaldo)},c2v:function(){gx.O.AV27TpConfSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTPCONFSALDO")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNQTDEDIFERENTE",gxz:"ZV21SnQtdeDiferente",gxold:"OV21SnQtdeDiferente",gxvar:"AV21SnQtdeDiferente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21SnQtdeDiferente=Value},v2z:function(Value){gx.O.ZV21SnQtdeDiferente=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNQTDEDIFERENTE",gx.O.AV21SnQtdeDiferente,"S")},c2v:function(){gx.O.AV21SnQtdeDiferente=this.val()},val:function(){return gx.fn.getControlValue("vSNQTDEDIFERENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMPCUSTOMEDIO",gxz:"ZV22SnImpCustoMedio",gxold:"OV22SnImpCustoMedio",gxvar:"AV22SnImpCustoMedio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV22SnImpCustoMedio=Value},v2z:function(Value){gx.O.ZV22SnImpCustoMedio=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNIMPCUSTOMEDIO",gx.O.AV22SnImpCustoMedio,"S")},c2v:function(){gx.O.AV22SnImpCustoMedio=this.val()},val:function(){return gx.fn.getControlValue("vSNIMPCUSTOMEDIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERACSV",gxz:"ZV82GeraCSV",gxold:"OV82GeraCSV",gxvar:"AV82GeraCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV82GeraCSV=Value},v2z:function(Value){gx.O.ZV82GeraCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERACSV",gx.O.AV82GeraCSV,"S")},c2v:function(){gx.O.AV82GeraCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERACSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[79]={fld:"TABLE5",grid:0};
   GXValidFnc[82]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[87]={fld:"TABLE8",grid:0};
   GXValidFnc[90]={fld:"TABLERANGEFAMILIA",grid:0};
   GXValidFnc[93]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI01",gxz:"ZV72FamiliaIni01",gxold:"OV72FamiliaIni01",gxvar:"AV72FamiliaIni01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72FamiliaIni01=Value},v2z:function(Value){gx.O.ZV72FamiliaIni01=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI01",gx.O.AV72FamiliaIni01,0)},c2v:function(){gx.O.AV72FamiliaIni01=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI01")},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN01",gxz:"ZV76FamiliaFin01",gxold:"OV76FamiliaFin01",gxvar:"AV76FamiliaFin01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76FamiliaFin01=Value},v2z:function(Value){gx.O.ZV76FamiliaFin01=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN01",gx.O.AV76FamiliaFin01,0)},c2v:function(){gx.O.AV76FamiliaFin01=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN01")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TABLERANGEFAMILIA2",grid:0};
   GXValidFnc[102]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI02",gxz:"ZV73FamiliaIni02",gxold:"OV73FamiliaIni02",gxvar:"AV73FamiliaIni02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73FamiliaIni02=Value},v2z:function(Value){gx.O.ZV73FamiliaIni02=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI02",gx.O.AV73FamiliaIni02,0)},c2v:function(){gx.O.AV73FamiliaIni02=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI02")},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN02",gxz:"ZV77FamiliaFin02",gxold:"OV77FamiliaFin02",gxvar:"AV77FamiliaFin02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77FamiliaFin02=Value},v2z:function(Value){gx.O.ZV77FamiliaFin02=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN02",gx.O.AV77FamiliaFin02,0)},c2v:function(){gx.O.AV77FamiliaFin02=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN02")},nac:gx.falseFn};
   GXValidFnc[111]={fld:"TABLE9",grid:0};
   GXValidFnc[114]={fld:"TABLERANGEFAMILIA5",grid:0};
   GXValidFnc[117]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI03",gxz:"ZV74FamiliaIni03",gxold:"OV74FamiliaIni03",gxvar:"AV74FamiliaIni03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74FamiliaIni03=Value},v2z:function(Value){gx.O.ZV74FamiliaIni03=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI03",gx.O.AV74FamiliaIni03,0)},c2v:function(){gx.O.AV74FamiliaIni03=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI03")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN03",gxz:"ZV78FamiliaFin03",gxold:"OV78FamiliaFin03",gxvar:"AV78FamiliaFin03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78FamiliaFin03=Value},v2z:function(Value){gx.O.ZV78FamiliaFin03=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN03",gx.O.AV78FamiliaFin03,0)},c2v:function(){gx.O.AV78FamiliaFin03=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN03")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TABLERANGEFAMILIA6",grid:0};
   GXValidFnc[126]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAINI04",gxz:"ZV75FamiliaIni04",gxold:"OV75FamiliaIni04",gxvar:"AV75FamiliaIni04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75FamiliaIni04=Value},v2z:function(Value){gx.O.ZV75FamiliaIni04=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAINI04",gx.O.AV75FamiliaIni04,0)},c2v:function(){gx.O.AV75FamiliaIni04=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAINI04")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAFIN04",gxz:"ZV79FamiliaFin04",gxold:"OV79FamiliaFin04",gxvar:"AV79FamiliaFin04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79FamiliaFin04=Value},v2z:function(Value){gx.O.ZV79FamiliaFin04=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAFIN04",gx.O.AV79FamiliaFin04,0)},c2v:function(){gx.O.AV79FamiliaFin04=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAFIN04")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[136]={fld:"TABLERANGETIPO",grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOINI",gxz:"ZV31TipoIni",gxold:"OV31TipoIni",gxvar:"AV31TipoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TipoIni=Value},v2z:function(Value){gx.O.ZV31TipoIni=Value},v2c:function(){gx.fn.setControlValue("vTIPOINI",gx.O.AV31TipoIni,0)},c2v:function(){gx.O.AV31TipoIni=this.val()},val:function(){return gx.fn.getControlValue("vTIPOINI")},nac:gx.falseFn};
   GXValidFnc[141]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[143]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOFIN",gxz:"ZV32TipoFin",gxold:"OV32TipoFin",gxvar:"AV32TipoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TipoFin=Value},v2z:function(Value){gx.O.ZV32TipoFin=Value},v2c:function(){gx.fn.setControlValue("vTIPOFIN",gx.O.AV32TipoFin,0)},c2v:function(){gx.O.AV32TipoFin=this.val()},val:function(){return gx.fn.getControlValue("vTIPOFIN")},nac:gx.falseFn};
   GXValidFnc[146]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[148]={fld:"TABLERANGEREFERENCIA",grid:0};
   GXValidFnc[151]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAINI",gxz:"ZV33ReferenciaIni",gxold:"OV33ReferenciaIni",gxvar:"AV33ReferenciaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ReferenciaIni=Value},v2z:function(Value){gx.O.ZV33ReferenciaIni=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAINI",gx.O.AV33ReferenciaIni,0)},c2v:function(){gx.O.AV33ReferenciaIni=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAINI")},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREFERENCIAFIN",gxz:"ZV34ReferenciaFin",gxold:"OV34ReferenciaFin",gxvar:"AV34ReferenciaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ReferenciaFin=Value},v2z:function(Value){gx.O.ZV34ReferenciaFin=Value},v2c:function(){gx.fn.setControlValue("vREFERENCIAFIN",gx.O.AV34ReferenciaFin,0)},c2v:function(){gx.O.AV34ReferenciaFin=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIAFIN")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[160]={fld:"TABLE4",grid:0};
   GXValidFnc[163]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID01",gxz:"ZV62FabricanteId01",gxold:"OV62FabricanteId01",gxvar:"AV62FabricanteId01",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62FabricanteId01=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62FabricanteId01=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID01",gx.O.AV62FabricanteId01,0)},c2v:function(){gx.O.AV62FabricanteId01=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID01",'.')},nac:gx.falseFn};
   GXValidFnc[165]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID02",gxz:"ZV63FabricanteId02",gxold:"OV63FabricanteId02",gxvar:"AV63FabricanteId02",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63FabricanteId02=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63FabricanteId02=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID02",gx.O.AV63FabricanteId02,0)},c2v:function(){gx.O.AV63FabricanteId02=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID02",'.')},nac:gx.falseFn};
   GXValidFnc[167]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID03",gxz:"ZV64FabricanteId03",gxold:"OV64FabricanteId03",gxvar:"AV64FabricanteId03",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64FabricanteId03=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64FabricanteId03=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID03",gx.O.AV64FabricanteId03,0)},c2v:function(){gx.O.AV64FabricanteId03=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID03",'.')},nac:gx.falseFn};
   GXValidFnc[169]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID04",gxz:"ZV65FabricanteId04",gxold:"OV65FabricanteId04",gxvar:"AV65FabricanteId04",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65FabricanteId04=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65FabricanteId04=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID04",gx.O.AV65FabricanteId04,0)},c2v:function(){gx.O.AV65FabricanteId04=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID04",'.')},nac:gx.falseFn};
   GXValidFnc[171]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID05",gxz:"ZV66FabricanteId05",gxold:"OV66FabricanteId05",gxvar:"AV66FabricanteId05",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66FabricanteId05=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66FabricanteId05=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID05",gx.O.AV66FabricanteId05,0)},c2v:function(){gx.O.AV66FabricanteId05=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID05",'.')},nac:gx.falseFn};
   GXValidFnc[173]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID06",gxz:"ZV67FabricanteId06",gxold:"OV67FabricanteId06",gxvar:"AV67FabricanteId06",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67FabricanteId06=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67FabricanteId06=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID06",gx.O.AV67FabricanteId06,0)},c2v:function(){gx.O.AV67FabricanteId06=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID06",'.')},nac:gx.falseFn};
   GXValidFnc[175]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID07",gxz:"ZV68FabricanteId07",gxold:"OV68FabricanteId07",gxvar:"AV68FabricanteId07",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68FabricanteId07=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68FabricanteId07=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID07",gx.O.AV68FabricanteId07,0)},c2v:function(){gx.O.AV68FabricanteId07=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID07",'.')},nac:gx.falseFn};
   GXValidFnc[177]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID08",gxz:"ZV69FabricanteId08",gxold:"OV69FabricanteId08",gxvar:"AV69FabricanteId08",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69FabricanteId08=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69FabricanteId08=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID08",gx.O.AV69FabricanteId08,0)},c2v:function(){gx.O.AV69FabricanteId08=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID08",'.')},nac:gx.falseFn};
   GXValidFnc[179]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID09",gxz:"ZV70FabricanteId09",gxold:"OV70FabricanteId09",gxvar:"AV70FabricanteId09",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70FabricanteId09=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70FabricanteId09=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID09",gx.O.AV70FabricanteId09,0)},c2v:function(){gx.O.AV70FabricanteId09=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID09",'.')},nac:gx.falseFn};
   GXValidFnc[181]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFABRICANTEID10",gxz:"ZV71FabricanteId10",gxold:"OV71FabricanteId10",gxvar:"AV71FabricanteId10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71FabricanteId10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71FabricanteId10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFABRICANTEID10",gx.O.AV71FabricanteId10,0)},c2v:function(){gx.O.AV71FabricanteId10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFABRICANTEID10",'.')},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[186]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCAL",gxz:"ZV36Local",gxold:"OV36Local",gxvar:"AV36Local",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36Local=Value},v2z:function(Value){gx.O.ZV36Local=Value},v2c:function(){gx.fn.setControlValue("vLOCAL",gx.O.AV36Local,0)},c2v:function(){gx.O.AV36Local=this.val()},val:function(){return gx.fn.getControlValue("vLOCAL")},nac:gx.falseFn};
   GXValidFnc[194]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV60Qtde",gxold:"OV60Qtde",gxvar:"AV60Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV60Qtde,0)},c2v:function(){gx.O.AV60Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[197]={fld:"JS", format:2,grid:0};
   GXValidFnc[198]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV38EmpresaPessoasEmpresaId",gxold:"OV38EmpresaPessoasEmpresaId",gxvar:"AV38EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV38EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV38EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV38EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[199]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV43Sim",gxold:"OV43Sim",gxvar:"AV43Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Sim=Value},v2z:function(Value){gx.O.ZV43Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV43Sim,0)},c2v:function(){gx.O.AV43Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[200]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV44Nao",gxold:"OV44Nao",gxvar:"AV44Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Nao=Value},v2z:function(Value){gx.O.ZV44Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV44Nao,0)},c2v:function(){gx.O.AV44Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[202]={fld:"BTNHELP",grid:0};
   GXValidFnc[204]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[205]={fld:"PROMPT_ESQUEMACODIGO",grid:0};
   GXValidFnc[206]={fld:"PROMPT_FAMILIAINI01",grid:0};
   GXValidFnc[207]={fld:"PROMPT_FAMILIAFIN01",grid:0};
   GXValidFnc[208]={fld:"PROMPT_FAMILIAINI02",grid:0};
   GXValidFnc[209]={fld:"PROMPT_FAMILIAFIN02",grid:0};
   GXValidFnc[210]={fld:"PROMPT_FAMILIAINI03",grid:0};
   GXValidFnc[211]={fld:"PROMPT_FAMILIAFIN03",grid:0};
   GXValidFnc[212]={fld:"PROMPT_FAMILIAINI04",grid:0};
   GXValidFnc[213]={fld:"PROMPT_FAMILIAFIN04",grid:0};
   GXValidFnc[214]={fld:"PROMPT_FABRICANTEID01",grid:0};
   GXValidFnc[215]={fld:"PROMPT_FABRICANTEID02",grid:0};
   GXValidFnc[216]={fld:"PROMPT_FABRICANTEID03",grid:0};
   GXValidFnc[217]={fld:"PROMPT_FABRICANTEID04",grid:0};
   GXValidFnc[218]={fld:"PROMPT_FABRICANTEID05",grid:0};
   GXValidFnc[219]={fld:"PROMPT_FABRICANTEID06",grid:0};
   GXValidFnc[220]={fld:"PROMPT_FABRICANTEID07",grid:0};
   GXValidFnc[221]={fld:"PROMPT_FABRICANTEID08",grid:0};
   GXValidFnc[222]={fld:"PROMPT_FABRICANTEID09",grid:0};
   GXValidFnc[223]={fld:"PROMPT_FABRICANTEID10",grid:0};
   this.AV23TpRelatorio = "" ;
   this.ZV23TpRelatorio = "" ;
   this.OV23TpRelatorio = "" ;
   this.AV26TpOrdenacao = "" ;
   this.ZV26TpOrdenacao = "" ;
   this.OV26TpOrdenacao = "" ;
   this.AV24FilialId = 0 ;
   this.ZV24FilialId = 0 ;
   this.OV24FilialId = 0 ;
   this.AV45FilialNome = "" ;
   this.ZV45FilialNome = "" ;
   this.OV45FilialNome = "" ;
   this.AV40FilialEmpresaId = "" ;
   this.ZV40FilialEmpresaId = "" ;
   this.OV40FilialEmpresaId = "" ;
   this.AV25DtInventario = gx.date.nullDate() ;
   this.ZV25DtInventario = gx.date.nullDate() ;
   this.OV25DtInventario = gx.date.nullDate() ;
   this.AV83InventarioSeqContagem = 0 ;
   this.ZV83InventarioSeqContagem = 0 ;
   this.OV83InventarioSeqContagem = 0 ;
   this.AV54EsquemaCodigo = 0 ;
   this.ZV54EsquemaCodigo = 0 ;
   this.OV54EsquemaCodigo = 0 ;
   this.AV55EsquemaDescricao = "" ;
   this.ZV55EsquemaDescricao = "" ;
   this.OV55EsquemaDescricao = "" ;
   this.AV53StInventario = "" ;
   this.ZV53StInventario = "" ;
   this.OV53StInventario = "" ;
   this.AV27TpConfSaldo = "" ;
   this.ZV27TpConfSaldo = "" ;
   this.OV27TpConfSaldo = "" ;
   this.AV21SnQtdeDiferente = "" ;
   this.ZV21SnQtdeDiferente = "" ;
   this.OV21SnQtdeDiferente = "" ;
   this.AV22SnImpCustoMedio = "" ;
   this.ZV22SnImpCustoMedio = "" ;
   this.OV22SnImpCustoMedio = "" ;
   this.AV82GeraCSV = "" ;
   this.ZV82GeraCSV = "" ;
   this.OV82GeraCSV = "" ;
   this.AV72FamiliaIni01 = "" ;
   this.ZV72FamiliaIni01 = "" ;
   this.OV72FamiliaIni01 = "" ;
   this.AV76FamiliaFin01 = "" ;
   this.ZV76FamiliaFin01 = "" ;
   this.OV76FamiliaFin01 = "" ;
   this.AV73FamiliaIni02 = "" ;
   this.ZV73FamiliaIni02 = "" ;
   this.OV73FamiliaIni02 = "" ;
   this.AV77FamiliaFin02 = "" ;
   this.ZV77FamiliaFin02 = "" ;
   this.OV77FamiliaFin02 = "" ;
   this.AV74FamiliaIni03 = "" ;
   this.ZV74FamiliaIni03 = "" ;
   this.OV74FamiliaIni03 = "" ;
   this.AV78FamiliaFin03 = "" ;
   this.ZV78FamiliaFin03 = "" ;
   this.OV78FamiliaFin03 = "" ;
   this.AV75FamiliaIni04 = "" ;
   this.ZV75FamiliaIni04 = "" ;
   this.OV75FamiliaIni04 = "" ;
   this.AV79FamiliaFin04 = "" ;
   this.ZV79FamiliaFin04 = "" ;
   this.OV79FamiliaFin04 = "" ;
   this.AV31TipoIni = "" ;
   this.ZV31TipoIni = "" ;
   this.OV31TipoIni = "" ;
   this.AV32TipoFin = "" ;
   this.ZV32TipoFin = "" ;
   this.OV32TipoFin = "" ;
   this.AV33ReferenciaIni = "" ;
   this.ZV33ReferenciaIni = "" ;
   this.OV33ReferenciaIni = "" ;
   this.AV34ReferenciaFin = "" ;
   this.ZV34ReferenciaFin = "" ;
   this.OV34ReferenciaFin = "" ;
   this.AV62FabricanteId01 = 0 ;
   this.ZV62FabricanteId01 = 0 ;
   this.OV62FabricanteId01 = 0 ;
   this.AV63FabricanteId02 = 0 ;
   this.ZV63FabricanteId02 = 0 ;
   this.OV63FabricanteId02 = 0 ;
   this.AV64FabricanteId03 = 0 ;
   this.ZV64FabricanteId03 = 0 ;
   this.OV64FabricanteId03 = 0 ;
   this.AV65FabricanteId04 = 0 ;
   this.ZV65FabricanteId04 = 0 ;
   this.OV65FabricanteId04 = 0 ;
   this.AV66FabricanteId05 = 0 ;
   this.ZV66FabricanteId05 = 0 ;
   this.OV66FabricanteId05 = 0 ;
   this.AV67FabricanteId06 = 0 ;
   this.ZV67FabricanteId06 = 0 ;
   this.OV67FabricanteId06 = 0 ;
   this.AV68FabricanteId07 = 0 ;
   this.ZV68FabricanteId07 = 0 ;
   this.OV68FabricanteId07 = 0 ;
   this.AV69FabricanteId08 = 0 ;
   this.ZV69FabricanteId08 = 0 ;
   this.OV69FabricanteId08 = 0 ;
   this.AV70FabricanteId09 = 0 ;
   this.ZV70FabricanteId09 = 0 ;
   this.OV70FabricanteId09 = 0 ;
   this.AV71FabricanteId10 = 0 ;
   this.ZV71FabricanteId10 = 0 ;
   this.OV71FabricanteId10 = 0 ;
   this.AV36Local = "" ;
   this.ZV36Local = "" ;
   this.OV36Local = "" ;
   this.AV60Qtde = 0 ;
   this.ZV60Qtde = 0 ;
   this.OV60Qtde = 0 ;
   this.AV38EmpresaPessoasEmpresaId = "" ;
   this.ZV38EmpresaPessoasEmpresaId = "" ;
   this.OV38EmpresaPessoasEmpresaId = "" ;
   this.AV43Sim = "" ;
   this.ZV43Sim = "" ;
   this.OV43Sim = "" ;
   this.AV44Nao = "" ;
   this.ZV44Nao = "" ;
   this.OV44Nao = "" ;
   this.AV23TpRelatorio = "" ;
   this.AV26TpOrdenacao = "" ;
   this.AV24FilialId = 0 ;
   this.AV45FilialNome = "" ;
   this.AV40FilialEmpresaId = "" ;
   this.AV25DtInventario = gx.date.nullDate() ;
   this.AV83InventarioSeqContagem = 0 ;
   this.AV54EsquemaCodigo = 0 ;
   this.AV55EsquemaDescricao = "" ;
   this.AV53StInventario = "" ;
   this.AV27TpConfSaldo = "" ;
   this.AV21SnQtdeDiferente = "" ;
   this.AV22SnImpCustoMedio = "" ;
   this.AV82GeraCSV = "" ;
   this.AV72FamiliaIni01 = "" ;
   this.AV76FamiliaFin01 = "" ;
   this.AV73FamiliaIni02 = "" ;
   this.AV77FamiliaFin02 = "" ;
   this.AV74FamiliaIni03 = "" ;
   this.AV78FamiliaFin03 = "" ;
   this.AV75FamiliaIni04 = "" ;
   this.AV79FamiliaFin04 = "" ;
   this.AV31TipoIni = "" ;
   this.AV32TipoFin = "" ;
   this.AV33ReferenciaIni = "" ;
   this.AV34ReferenciaFin = "" ;
   this.AV62FabricanteId01 = 0 ;
   this.AV63FabricanteId02 = 0 ;
   this.AV64FabricanteId03 = 0 ;
   this.AV65FabricanteId04 = 0 ;
   this.AV66FabricanteId05 = 0 ;
   this.AV67FabricanteId06 = 0 ;
   this.AV68FabricanteId07 = 0 ;
   this.AV69FabricanteId08 = 0 ;
   this.AV70FabricanteId09 = 0 ;
   this.AV71FabricanteId10 = 0 ;
   this.AV36Local = "" ;
   this.AV60Qtde = 0 ;
   this.AV38EmpresaPessoasEmpresaId = "" ;
   this.AV43Sim = "" ;
   this.AV44Nao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.Events = {"e11y42_client": ["'FECHAR'", true] ,"e13y42_client": ["ENTER", true] ,"e15y42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV37TpErro',fld:'vTPERRO'},{av:'AV26TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV57SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV56EsquemaUnico',fld:'vESQUEMAUNICO'},{av:'AV54EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV23TpRelatorio',fld:'vTPRELATORIO'},{av:'AV24FilialId',fld:'vFILIALID'},{av:'AV25DtInventario',fld:'vDTINVENTARIO'},{av:'AV53StInventario',fld:'vSTINVENTARIO'},{av:'AV27TpConfSaldo',fld:'vTPCONFSALDO'},{av:'AV21SnQtdeDiferente',fld:'vSNQTDEDIFERENTE'},{av:'AV22SnImpCustoMedio',fld:'vSNIMPCUSTOMEDIO'},{av:'AV31TipoIni',fld:'vTIPOINI'},{av:'AV32TipoFin',fld:'vTIPOFIN'},{av:'AV33ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV34ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV36Local',fld:'vLOCAL'},{av:'AV72FamiliaIni01',fld:'vFAMILIAINI01'},{av:'AV76FamiliaFin01',fld:'vFAMILIAFIN01'},{av:'AV73FamiliaIni02',fld:'vFAMILIAINI02'},{av:'AV77FamiliaFin02',fld:'vFAMILIAFIN02'},{av:'AV74FamiliaIni03',fld:'vFAMILIAINI03'},{av:'AV78FamiliaFin03',fld:'vFAMILIAFIN03'},{av:'AV75FamiliaIni04',fld:'vFAMILIAINI04'},{av:'AV79FamiliaFin04',fld:'vFAMILIAFIN04'},{av:'AV62FabricanteId01',fld:'vFABRICANTEID01'},{av:'AV63FabricanteId02',fld:'vFABRICANTEID02'},{av:'AV64FabricanteId03',fld:'vFABRICANTEID03'},{av:'AV65FabricanteId04',fld:'vFABRICANTEID04'},{av:'AV66FabricanteId05',fld:'vFABRICANTEID05'},{av:'AV67FabricanteId06',fld:'vFABRICANTEID06'},{av:'AV68FabricanteId07',fld:'vFABRICANTEID07'},{av:'AV69FabricanteId08',fld:'vFABRICANTEID08'},{av:'AV70FabricanteId09',fld:'vFABRICANTEID09'},{av:'AV71FabricanteId10',fld:'vFABRICANTEID10'},{av:'AV83InventarioSeqContagem',fld:'vINVENTARIOSEQCONTAGEM'},{av:'AV82GeraCSV',fld:'vGERACSV'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV40FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2912EsquemaDescricao',fld:'ESQUEMADESCRICAO'},{av:'AV81FabricanteId',fld:'vFABRICANTEID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV38EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV54EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV82GeraCSV',fld:'vGERACSV'},{av:'AV83InventarioSeqContagem',fld:'vINVENTARIOSEQCONTAGEM'},{av:'AV71FabricanteId10',fld:'vFABRICANTEID10'},{av:'AV70FabricanteId09',fld:'vFABRICANTEID09'},{av:'AV69FabricanteId08',fld:'vFABRICANTEID08'},{av:'AV68FabricanteId07',fld:'vFABRICANTEID07'},{av:'AV67FabricanteId06',fld:'vFABRICANTEID06'},{av:'AV66FabricanteId05',fld:'vFABRICANTEID05'},{av:'AV65FabricanteId04',fld:'vFABRICANTEID04'},{av:'AV64FabricanteId03',fld:'vFABRICANTEID03'},{av:'AV63FabricanteId02',fld:'vFABRICANTEID02'},{av:'AV62FabricanteId01',fld:'vFABRICANTEID01'},{av:'AV79FamiliaFin04',fld:'vFAMILIAFIN04'},{av:'AV75FamiliaIni04',fld:'vFAMILIAINI04'},{av:'AV78FamiliaFin03',fld:'vFAMILIAFIN03'},{av:'AV74FamiliaIni03',fld:'vFAMILIAINI03'},{av:'AV77FamiliaFin02',fld:'vFAMILIAFIN02'},{av:'AV73FamiliaIni02',fld:'vFAMILIAINI02'},{av:'AV76FamiliaFin01',fld:'vFAMILIAFIN01'},{av:'AV72FamiliaIni01',fld:'vFAMILIAINI01'},{av:'AV36Local',fld:'vLOCAL'},{av:'AV34ReferenciaFin',fld:'vREFERENCIAFIN'},{av:'AV33ReferenciaIni',fld:'vREFERENCIAINI'},{av:'AV32TipoFin',fld:'vTIPOFIN'},{av:'AV31TipoIni',fld:'vTIPOINI'},{av:'AV22SnImpCustoMedio',fld:'vSNIMPCUSTOMEDIO'},{av:'AV21SnQtdeDiferente',fld:'vSNQTDEDIFERENTE'},{av:'AV27TpConfSaldo',fld:'vTPCONFSALDO'},{av:'AV53StInventario',fld:'vSTINVENTARIO'},{av:'AV25DtInventario',fld:'vDTINVENTARIO'},{av:'AV24FilialId',fld:'vFILIALID'},{av:'AV26TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV23TpRelatorio',fld:'vTPRELATORIO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37TpErro',fld:'vTPERRO'},{av:'AV91GXLvl163',fld:'vGXLVL163'},{av:'AV45FilialNome',fld:'vFILIALNOME'},{av:'AV92GXLvl188',fld:'vGXLVL188'},{av:'AV55EsquemaDescricao',fld:'vESQUEMADESCRICAO'},{av:'AV80x',fld:'vX'},{av:'AV81FabricanteId',fld:'vFABRICANTEID'},{av:'AV93GXLvl283',fld:'vGXLVL283'}]];
   this.setPrompt("PROMPTINVENTARIO", [40]);
   this.setPrompt("PROMPT_FILIALID", [33]);
   this.setPrompt("PROMPT_ESQUEMACODIGO", [51]);
   this.setPrompt("PROMPT_FAMILIAINI01", [93]);
   this.setPrompt("PROMPT_FAMILIAFIN01", [97]);
   this.setPrompt("PROMPT_FAMILIAINI02", [102]);
   this.setPrompt("PROMPT_FAMILIAFIN02", [106]);
   this.setPrompt("PROMPT_FAMILIAINI03", [117]);
   this.setPrompt("PROMPT_FAMILIAFIN03", [121]);
   this.setPrompt("PROMPT_FAMILIAINI04", [126]);
   this.setPrompt("PROMPT_FAMILIAFIN04", [130]);
   this.setPrompt("PROMPT_FABRICANTEID01", [163]);
   this.setPrompt("PROMPT_FABRICANTEID02", [165]);
   this.setPrompt("PROMPT_FABRICANTEID03", [167]);
   this.setPrompt("PROMPT_FABRICANTEID04", [169]);
   this.setPrompt("PROMPT_FABRICANTEID05", [171]);
   this.setPrompt("PROMPT_FABRICANTEID06", [173]);
   this.setPrompt("PROMPT_FABRICANTEID07", [175]);
   this.setPrompt("PROMPT_FABRICANTEID08", [177]);
   this.setPrompt("PROMPT_FABRICANTEID09", [179]);
   this.setPrompt("PROMPT_FABRICANTEID10", [181]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconferenciainventario());
