/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:17:57.68
*/
gx.evt.autoSkip = false;
gx.define('hcadastrareducaoz', false, function () {
   this.ServerClass =  "hcadastrareducaoz" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV24Sdt=gx.fn.getControlValue("vSDT") ;
      this.AV48ReducaoZNumeroLojaParm=gx.fn.getIntegerValue("vREDUCAOZNUMEROLOJAPARM",'.') ;
      this.AV49ReducaoZSequenciaECFParm=gx.fn.getIntegerValue("vREDUCAOZSEQUENCIAECFPARM",'.') ;
      this.AV50ReducaoZDataParm=gx.fn.getDateValue("vREDUCAOZDATAPARM") ;
      this.AV8PDVCodigo=gx.fn.getIntegerValue("vPDVCODIGO",'.') ;
   };
   this.Validv_Reducaoznumeroloja=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREDUCAOZNUMEROLOJA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Reducaozsequenciaecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREDUCAOZSEQUENCIAECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Reducaozdata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vREDUCAOZDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12tr2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11tr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16tr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,15,17,20,22,25,27,30,32,35,37,40,42,45,47,50,52,55,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,105,108,110,111,112,113,114,115,116,119,122,124,125,131,137,138,141];
   this.GXLastCtrlId =141;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",109,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hcadastrareducaoz",[],false,1,false,true,0,false,false,false,"CollSdtAliquotaReducao.SdtAliquotaReducaoItem",0,"px","Novo registro",false,false,false,null,null,false,"AV24Sdt",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addCheckBox("GXV132",110,"CTLSNDELETE","","","SnDelete","char","S","N",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit("GXV133",111,"CTLALIQUOTAREDUCAOCODIGO","Código da Alíquota","","AliquotaReducaoCodigo","svchar",0,"px",10,10,"left",null,[],"GXV133","GXV133",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV134",112,"CTLALIQUOTAREDUCAOVALOR","Valor da Alíquota","","AliquotaReducaoValor","decimal",0,"px",22,22,"right",null,[],"GXV134","GXV134",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV135",113,"CTLALIQUOTAREDUCAODATAHORAALT","Data/Hora de Alteração","","AliquotaReducaoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"GXV135","GXV135",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV136",114,"CTLALIQUOTAREDUCAOUSUARIOALT","Usuário de Alteração","","AliquotaReducaoUsuarioAlt","char",0,"px",12,12,"left",null,[],"GXV136","GXV136",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV137",115,"CTLSEQ","Seq","","Seq","int",0,"px",4,4,"right",null,[],"GXV137","GXV137",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV51Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV51Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV51Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hcadastrareducaoz_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 139, 17, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE10",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Reducaoznumeroloja,isvalid:null,rgrid:[],fld:"vREDUCAOZNUMEROLOJA",gxz:"ZV47ReducaoZNumeroLoja",gxold:"OV47ReducaoZNumeroLoja",gxvar:"AV47ReducaoZNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ReducaoZNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47ReducaoZNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZNUMEROLOJA",gx.O.AV47ReducaoZNumeroLoja,0)},c2v:function(){gx.O.AV47ReducaoZNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZNUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Reducaozsequenciaecf,isvalid:null,rgrid:[],fld:"vREDUCAOZSEQUENCIAECF",gxz:"ZV17ReducaoZSequenciaECF",gxold:"OV17ReducaoZSequenciaECF",gxvar:"AV17ReducaoZSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ReducaoZSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ReducaoZSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZSEQUENCIAECF",gx.O.AV17ReducaoZSequenciaECF,0)},c2v:function(){gx.O.AV17ReducaoZSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Reducaozdata,isvalid:null,rgrid:[],fld:"vREDUCAOZDATA",gxz:"ZV7ReducaoZData",gxold:"OV7ReducaoZData",gxvar:"AV7ReducaoZData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7ReducaoZData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7ReducaoZData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZDATA",gx.O.AV7ReducaoZData,0)},c2v:function(){gx.O.AV7ReducaoZData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vREDUCAOZDATA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZNUMINTERVENCAO",gxz:"ZV9ReducaoZNumIntervencao",gxold:"OV9ReducaoZNumIntervencao",gxvar:"AV9ReducaoZNumIntervencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ReducaoZNumIntervencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ReducaoZNumIntervencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZNUMINTERVENCAO",gx.O.AV9ReducaoZNumIntervencao,0)},c2v:function(){gx.O.AV9ReducaoZNumIntervencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZNUMINTERVENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZPRIMEIRAOPERACAO",gxz:"ZV10ReducaoZPrimeiraOperacao",gxold:"OV10ReducaoZPrimeiraOperacao",gxvar:"AV10ReducaoZPrimeiraOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ReducaoZPrimeiraOperacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10ReducaoZPrimeiraOperacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZPRIMEIRAOPERACAO",gx.O.AV10ReducaoZPrimeiraOperacao,0)},c2v:function(){gx.O.AV10ReducaoZPrimeiraOperacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZPRIMEIRAOPERACAO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZULTIMAOPERACAO",gxz:"ZV11ReducaoZUltimaOperacao",gxold:"OV11ReducaoZUltimaOperacao",gxvar:"AV11ReducaoZUltimaOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ReducaoZUltimaOperacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ReducaoZUltimaOperacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZULTIMAOPERACAO",gx.O.AV11ReducaoZUltimaOperacao,0)},c2v:function(){gx.O.AV11ReducaoZUltimaOperacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZULTIMAOPERACAO",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZVLRGRANDEINICIAL",gxz:"ZV13ReducaoZVlrGrandeInicial",gxold:"OV13ReducaoZVlrGrandeInicial",gxvar:"AV13ReducaoZVlrGrandeInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ReducaoZVlrGrandeInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13ReducaoZVlrGrandeInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vREDUCAOZVLRGRANDEINICIAL",gx.O.AV13ReducaoZVlrGrandeInicial,2,',')},c2v:function(){gx.O.AV13ReducaoZVlrGrandeInicial=this.val()},val:function(){return gx.fn.getDecimalValue("vREDUCAOZVLRGRANDEINICIAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZVLRGRANDEFINAL",gxz:"ZV14ReducaoZVlrGrandeFinal",gxold:"OV14ReducaoZVlrGrandeFinal",gxvar:"AV14ReducaoZVlrGrandeFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ReducaoZVlrGrandeFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV14ReducaoZVlrGrandeFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vREDUCAOZVLRGRANDEFINAL",gx.O.AV14ReducaoZVlrGrandeFinal,2,',')},c2v:function(){gx.O.AV14ReducaoZVlrGrandeFinal=this.val()},val:function(){return gx.fn.getDecimalValue("vREDUCAOZVLRGRANDEFINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZVENDABRUTA",gxz:"ZV43ReducaoZVendaBruta",gxold:"OV43ReducaoZVendaBruta",gxvar:"AV43ReducaoZVendaBruta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ReducaoZVendaBruta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV43ReducaoZVendaBruta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vREDUCAOZVENDABRUTA",gx.O.AV43ReducaoZVendaBruta,2,',')},c2v:function(){gx.O.AV43ReducaoZVendaBruta=this.val()},val:function(){return gx.fn.getDecimalValue("vREDUCAOZVENDABRUTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE2",grid:0};
   GXValidFnc[62]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZNUMEROSERIE",gxz:"ZV15ReducaoZNumeroSerie",gxold:"OV15ReducaoZNumeroSerie",gxvar:"AV15ReducaoZNumeroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ReducaoZNumeroSerie=Value},v2z:function(Value){gx.O.ZV15ReducaoZNumeroSerie=Value},v2c:function(){gx.fn.setControlValue("vREDUCAOZNUMEROSERIE",gx.O.AV15ReducaoZNumeroSerie,0)},c2v:function(){gx.O.AV15ReducaoZNumeroSerie=this.val()},val:function(){return gx.fn.getControlValue("vREDUCAOZNUMEROSERIE")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZDATAIMPRESSAO",gxz:"ZV45ReducaoZDataImpressao",gxold:"OV45ReducaoZDataImpressao",gxvar:"AV45ReducaoZDataImpressao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ReducaoZDataImpressao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV45ReducaoZDataImpressao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZDATAIMPRESSAO",gx.O.AV45ReducaoZDataImpressao,0)},c2v:function(){gx.O.AV45ReducaoZDataImpressao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vREDUCAOZDATAIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZHORAIMPRESSAO",gxz:"ZV46ReducaoZHoraImpressao",gxold:"OV46ReducaoZHoraImpressao",gxvar:"AV46ReducaoZHoraImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ReducaoZHoraImpressao=Value},v2z:function(Value){gx.O.ZV46ReducaoZHoraImpressao=Value},v2c:function(){gx.fn.setControlValue("vREDUCAOZHORAIMPRESSAO",gx.O.AV46ReducaoZHoraImpressao,0)},c2v:function(){gx.O.AV46ReducaoZHoraImpressao=this.val()},val:function(){return gx.fn.getControlValue("vREDUCAOZHORAIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZCONTADORREDUCAO",gxz:"ZV12ReducaoZContadorReducao",gxold:"OV12ReducaoZContadorReducao",gxvar:"AV12ReducaoZContadorReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ReducaoZContadorReducao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12ReducaoZContadorReducao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZCONTADORREDUCAO",gx.O.AV12ReducaoZContadorReducao,0)},c2v:function(){gx.O.AV12ReducaoZContadorReducao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZCONTADORREDUCAO",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZCOOREDUCAO",gxz:"ZV16ReducaoZCOOReducao",gxold:"OV16ReducaoZCOOReducao",gxvar:"AV16ReducaoZCOOReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ReducaoZCOOReducao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ReducaoZCOOReducao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZCOOREDUCAO",gx.O.AV16ReducaoZCOOReducao,0)},c2v:function(){gx.O.AV16ReducaoZCOOReducao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZCOOREDUCAO",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZNUMEROUSUARIOECF",gxz:"ZV18ReducaoZNumeroUsuarioECF",gxold:"OV18ReducaoZNumeroUsuarioECF",gxvar:"AV18ReducaoZNumeroUsuarioECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ReducaoZNumeroUsuarioECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ReducaoZNumeroUsuarioECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZNUMEROUSUARIOECF",gx.O.AV18ReducaoZNumeroUsuarioECF,0)},c2v:function(){gx.O.AV18ReducaoZNumeroUsuarioECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREDUCAOZNUMEROUSUARIOECF",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZLETRAMFADICIONALECF",gxz:"ZV19ReducaoZLetraMFAdicionalECF",gxold:"OV19ReducaoZLetraMFAdicionalECF",gxvar:"AV19ReducaoZLetraMFAdicionalECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ReducaoZLetraMFAdicionalECF=Value},v2z:function(Value){gx.O.ZV19ReducaoZLetraMFAdicionalECF=Value},v2c:function(){gx.fn.setControlValue("vREDUCAOZLETRAMFADICIONALECF",gx.O.AV19ReducaoZLetraMFAdicionalECF,0)},c2v:function(){gx.O.AV19ReducaoZLetraMFAdicionalECF=this.val()},val:function(){return gx.fn.getControlValue("vREDUCAOZLETRAMFADICIONALECF")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZMODELOECF",gxz:"ZV20ReducaoZModeloECF",gxold:"OV20ReducaoZModeloECF",gxvar:"AV20ReducaoZModeloECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ReducaoZModeloECF=Value},v2z:function(Value){gx.O.ZV20ReducaoZModeloECF=Value},v2c:function(){gx.fn.setControlValue("vREDUCAOZMODELOECF",gx.O.AV20ReducaoZModeloECF,0)},c2v:function(){gx.O.AV20ReducaoZModeloECF=this.val()},val:function(){return gx.fn.getControlValue("vREDUCAOZMODELOECF")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZDESCONTOISSQNECF",gxz:"ZV21ReducaoZDescontoISSQNECF",gxold:"OV21ReducaoZDescontoISSQNECF",gxvar:"AV21ReducaoZDescontoISSQNECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21ReducaoZDescontoISSQNECF=Value},v2z:function(Value){gx.O.ZV21ReducaoZDescontoISSQNECF=Value},v2c:function(){gx.fn.setCheckBoxValue("vREDUCAOZDESCONTOISSQNECF",gx.O.AV21ReducaoZDescontoISSQNECF,"S")},c2v:function(){gx.O.AV21ReducaoZDescontoISSQNECF=this.val()},val:function(){return gx.fn.getControlValue("vREDUCAOZDESCONTOISSQNECF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[105]={fld:"TAB2",grid:0};
   GXValidFnc[108]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[110]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNDELETE",gxz:"ZV58GXV132",gxold:"OV58GXV132",gxvar:"GXV132",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV132=Value},v2z:function(Value){gx.O.ZV58GXV132=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNDELETE",row || gx.fn.currentGridRowImpl(109),gx.O.GXV132,"S")},c2v:function(){gx.O.GXV132=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNDELETE",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[111]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLALIQUOTAREDUCAOCODIGO",gxz:"ZV59GXV133",gxold:"OV59GXV133",gxvar:"GXV133",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV133=Value},v2z:function(Value){gx.O.ZV59GXV133=Value},v2c:function(row){gx.fn.setGridControlValue("CTLALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(109),gx.O.GXV133,0)},c2v:function(){gx.O.GXV133=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLALIQUOTAREDUCAOVALOR",gxz:"ZV60GXV134",gxold:"OV60GXV134",gxvar:"GXV134",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV134=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV60GXV134=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(109),gx.O.GXV134,2,',')},c2v:function(){gx.O.GXV134=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(109),'.',',')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLALIQUOTAREDUCAODATAHORAALT",gxz:"ZV61GXV135",gxold:"OV61GXV135",gxvar:"GXV135",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV135=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV61GXV135=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLALIQUOTAREDUCAODATAHORAALT",row || gx.fn.currentGridRowImpl(109),gx.O.GXV135,0)},c2v:function(){gx.O.GXV135=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLALIQUOTAREDUCAODATAHORAALT",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLALIQUOTAREDUCAOUSUARIOALT",gxz:"ZV62GXV136",gxold:"OV62GXV136",gxvar:"GXV136",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV136=Value},v2z:function(Value){gx.O.ZV62GXV136=Value},v2c:function(row){gx.fn.setGridControlValue("CTLALIQUOTAREDUCAOUSUARIOALT",row || gx.fn.currentGridRowImpl(109),gx.O.GXV136,0)},c2v:function(){gx.O.GXV136=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLALIQUOTAREDUCAOUSUARIOALT",row || gx.fn.currentGridRowImpl(109))},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:109,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQ",gxz:"ZV63GXV137",gxold:"OV63GXV137",gxvar:"GXV137",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV137=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63GXV137=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQ",row || gx.fn.currentGridRowImpl(109),gx.O.GXV137,0)},c2v:function(){gx.O.GXV137=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQ",row || gx.fn.currentGridRowImpl(109),'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[119]={fld:"TABLE7",grid:0};
   GXValidFnc[122]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZUSUARIOALT",gxz:"ZV22ReducaoZUsuarioAlt",gxold:"OV22ReducaoZUsuarioAlt",gxvar:"AV22ReducaoZUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ReducaoZUsuarioAlt=Value},v2z:function(Value){gx.O.ZV22ReducaoZUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vREDUCAOZUSUARIOALT",gx.O.AV22ReducaoZUsuarioAlt,0)},c2v:function(){gx.O.AV22ReducaoZUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vREDUCAOZUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREDUCAOZDATAHORAALT",gxz:"ZV23ReducaoZDataHoraAlt",gxold:"OV23ReducaoZDataHoraAlt",gxvar:"AV23ReducaoZDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ReducaoZDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23ReducaoZDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vREDUCAOZDATAHORAALT",gx.O.AV23ReducaoZDataHoraAlt,0)},c2v:function(){gx.O.AV23ReducaoZDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vREDUCAOZDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TABLE6",grid:0};
   GXValidFnc[137]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV6AcessoSistemaSequencia",gxold:"OV6AcessoSistemaSequencia",gxvar:"AV6AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV6AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV6AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"JS", format:2,grid:0};
   GXValidFnc[141]={fld:"BTNHELP",grid:0};
   this.AV47ReducaoZNumeroLoja = 0 ;
   this.ZV47ReducaoZNumeroLoja = 0 ;
   this.OV47ReducaoZNumeroLoja = 0 ;
   this.AV17ReducaoZSequenciaECF = 0 ;
   this.ZV17ReducaoZSequenciaECF = 0 ;
   this.OV17ReducaoZSequenciaECF = 0 ;
   this.AV7ReducaoZData = gx.date.nullDate() ;
   this.ZV7ReducaoZData = gx.date.nullDate() ;
   this.OV7ReducaoZData = gx.date.nullDate() ;
   this.AV9ReducaoZNumIntervencao = 0 ;
   this.ZV9ReducaoZNumIntervencao = 0 ;
   this.OV9ReducaoZNumIntervencao = 0 ;
   this.AV10ReducaoZPrimeiraOperacao = 0 ;
   this.ZV10ReducaoZPrimeiraOperacao = 0 ;
   this.OV10ReducaoZPrimeiraOperacao = 0 ;
   this.AV11ReducaoZUltimaOperacao = 0 ;
   this.ZV11ReducaoZUltimaOperacao = 0 ;
   this.OV11ReducaoZUltimaOperacao = 0 ;
   this.AV13ReducaoZVlrGrandeInicial = 0 ;
   this.ZV13ReducaoZVlrGrandeInicial = 0 ;
   this.OV13ReducaoZVlrGrandeInicial = 0 ;
   this.AV14ReducaoZVlrGrandeFinal = 0 ;
   this.ZV14ReducaoZVlrGrandeFinal = 0 ;
   this.OV14ReducaoZVlrGrandeFinal = 0 ;
   this.AV43ReducaoZVendaBruta = 0 ;
   this.ZV43ReducaoZVendaBruta = 0 ;
   this.OV43ReducaoZVendaBruta = 0 ;
   this.AV15ReducaoZNumeroSerie = "" ;
   this.ZV15ReducaoZNumeroSerie = "" ;
   this.OV15ReducaoZNumeroSerie = "" ;
   this.AV45ReducaoZDataImpressao = gx.date.nullDate() ;
   this.ZV45ReducaoZDataImpressao = gx.date.nullDate() ;
   this.OV45ReducaoZDataImpressao = gx.date.nullDate() ;
   this.AV46ReducaoZHoraImpressao = "" ;
   this.ZV46ReducaoZHoraImpressao = "" ;
   this.OV46ReducaoZHoraImpressao = "" ;
   this.AV12ReducaoZContadorReducao = 0 ;
   this.ZV12ReducaoZContadorReducao = 0 ;
   this.OV12ReducaoZContadorReducao = 0 ;
   this.AV16ReducaoZCOOReducao = 0 ;
   this.ZV16ReducaoZCOOReducao = 0 ;
   this.OV16ReducaoZCOOReducao = 0 ;
   this.AV18ReducaoZNumeroUsuarioECF = 0 ;
   this.ZV18ReducaoZNumeroUsuarioECF = 0 ;
   this.OV18ReducaoZNumeroUsuarioECF = 0 ;
   this.AV19ReducaoZLetraMFAdicionalECF = "" ;
   this.ZV19ReducaoZLetraMFAdicionalECF = "" ;
   this.OV19ReducaoZLetraMFAdicionalECF = "" ;
   this.AV20ReducaoZModeloECF = "" ;
   this.ZV20ReducaoZModeloECF = "" ;
   this.OV20ReducaoZModeloECF = "" ;
   this.AV21ReducaoZDescontoISSQNECF = "" ;
   this.ZV21ReducaoZDescontoISSQNECF = "" ;
   this.OV21ReducaoZDescontoISSQNECF = "" ;
   this.ZV58GXV132 = "" ;
   this.OV58GXV132 = "" ;
   this.ZV59GXV133 = "" ;
   this.OV59GXV133 = "" ;
   this.ZV60GXV134 = 0 ;
   this.OV60GXV134 = 0 ;
   this.ZV61GXV135 = gx.date.nullDate() ;
   this.OV61GXV135 = gx.date.nullDate() ;
   this.ZV62GXV136 = "" ;
   this.OV62GXV136 = "" ;
   this.ZV63GXV137 = 0 ;
   this.OV63GXV137 = 0 ;
   this.AV22ReducaoZUsuarioAlt = "" ;
   this.ZV22ReducaoZUsuarioAlt = "" ;
   this.OV22ReducaoZUsuarioAlt = "" ;
   this.AV23ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.ZV23ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.OV23ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.ZV6AcessoSistemaSequencia = 0 ;
   this.OV6AcessoSistemaSequencia = 0 ;
   this.AV51Tab = [ ] ;
   this.AV47ReducaoZNumeroLoja = 0 ;
   this.AV17ReducaoZSequenciaECF = 0 ;
   this.AV7ReducaoZData = gx.date.nullDate() ;
   this.AV9ReducaoZNumIntervencao = 0 ;
   this.AV10ReducaoZPrimeiraOperacao = 0 ;
   this.AV11ReducaoZUltimaOperacao = 0 ;
   this.AV13ReducaoZVlrGrandeInicial = 0 ;
   this.AV14ReducaoZVlrGrandeFinal = 0 ;
   this.AV43ReducaoZVendaBruta = 0 ;
   this.AV15ReducaoZNumeroSerie = "" ;
   this.AV45ReducaoZDataImpressao = gx.date.nullDate() ;
   this.AV46ReducaoZHoraImpressao = "" ;
   this.AV12ReducaoZContadorReducao = 0 ;
   this.AV16ReducaoZCOOReducao = 0 ;
   this.AV18ReducaoZNumeroUsuarioECF = 0 ;
   this.AV19ReducaoZLetraMFAdicionalECF = "" ;
   this.AV20ReducaoZModeloECF = "" ;
   this.AV21ReducaoZDescontoISSQNECF = "" ;
   this.AV22ReducaoZUsuarioAlt = "" ;
   this.AV23ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.AV6AcessoSistemaSequencia = 0 ;
   this.AV48ReducaoZNumeroLojaParm = 0 ;
   this.AV49ReducaoZSequenciaECFParm = 0 ;
   this.AV50ReducaoZDataParm = gx.date.nullDate() ;
   this.AV8PDVCodigo = 0 ;
   this.GXV132 = "" ;
   this.GXV133 = "" ;
   this.GXV134 = 0 ;
   this.GXV135 = gx.date.nullDate() ;
   this.GXV136 = "" ;
   this.GXV137 = 0 ;
   this.A3434PDVCodigo = 0 ;
   this.A3435AliquotaPDV = "" ;
   this.A3996ReducaoZData = gx.date.nullDate() ;
   this.A4326ReducaoZSequenciaECF = 0 ;
   this.A5775ReducaoZNumeroLoja = 0 ;
   this.A3995ReducaoZEmpresaId = "" ;
   this.A3982ReducaoZNumIntervencao = 0 ;
   this.A3983ReducaoZPrimeiraOperacao = 0 ;
   this.A3984ReducaoZUltimaOperacao = 0 ;
   this.A3985ReducaoZContadorReducao = 0 ;
   this.A3986ReducaoZVlrGrandeInicial = 0 ;
   this.A3987ReducaoZVlrGrandeFinal = 0 ;
   this.A4323ReducaoZNumeroSerie = "" ;
   this.A5379ReducaoZDataImpressao = gx.date.nullDate() ;
   this.A5380ReducaoZHoraImpressao = "" ;
   this.A4325ReducaoZCOOReducao = 0 ;
   this.A4327ReducaoZNumeroUsuarioECF = 0 ;
   this.A4328ReducaoZLetraMFAdicionalECF = "" ;
   this.A4329ReducaoZModeloECF = "" ;
   this.A4330ReducaoZDescontoISSQNECF = "" ;
   this.A3989ReducaoZUsuarioAlt = "" ;
   this.A3990ReducaoZDataHoraAlt = gx.date.nullDate() ;
   this.A3997AliquotaReducaoCodigo = "" ;
   this.A3994AliquotaReducaoUsuarioAlt = "" ;
   this.A3993AliquotaReducaoDataHoraAlt = gx.date.nullDate() ;
   this.A3992AliquotaReducaoValor = 0 ;
   this.A6533EquipamentoSequenciaECF = 0 ;
   this.A6532EquipamentoNumeroLoja = 0 ;
   this.A6524EquipamentoNumeroSerie = "" ;
   this.A6525EquipamentoNumIntervencao = 0 ;
   this.A6526EquipamentoNumeroUsuarioECF = 0 ;
   this.A6527EquipamentoLetraMFAdicionalECF = "" ;
   this.A6528EquipamentoModeloECF = "" ;
   this.A6529EquipamentoDescontoISSQNECF = "" ;
   this.Gx_mode = "" ;
   this.AV24Sdt = [ ] ;
   this.Events = {"e12tr2_client": ["ENTER", true] ,"e11tr2_client": ["'FECHAR'", true] ,"e16tr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV24Sdt',fld:'vSDT',grid:109},{av:'Gx_mode',fld:'vMODE'}],[{av:'gx.fn.getCtrlProperty("vREDUCAOZNUMEROLOJA","Enabled")',ctrl:'vREDUCAOZNUMEROLOJA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZCONTADORREDUCAO","Enabled")',ctrl:'vREDUCAOZCONTADORREDUCAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZCOOREDUCAO","Enabled")',ctrl:'vREDUCAOZCOOREDUCAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZDATA","Enabled")',ctrl:'vREDUCAOZDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZDATAIMPRESSAO","Enabled")',ctrl:'vREDUCAOZDATAIMPRESSAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZHORAIMPRESSAO","Enabled")',ctrl:'vREDUCAOZHORAIMPRESSAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZDESCONTOISSQNECF","Enabled")',ctrl:'vREDUCAOZDESCONTOISSQNECF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZLETRAMFADICIONALECF","Enabled")',ctrl:'vREDUCAOZLETRAMFADICIONALECF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZMODELOECF","Enabled")',ctrl:'vREDUCAOZMODELOECF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZNUMEROSERIE","Enabled")',ctrl:'vREDUCAOZNUMEROSERIE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZNUMEROUSUARIOECF","Enabled")',ctrl:'vREDUCAOZNUMEROUSUARIOECF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZNUMINTERVENCAO","Enabled")',ctrl:'vREDUCAOZNUMINTERVENCAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZPRIMEIRAOPERACAO","Enabled")',ctrl:'vREDUCAOZPRIMEIRAOPERACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZSEQUENCIAECF","Enabled")',ctrl:'vREDUCAOZSEQUENCIAECF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZULTIMAOPERACAO","Enabled")',ctrl:'vREDUCAOZULTIMAOPERACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZVLRGRANDEFINAL","Enabled")',ctrl:'vREDUCAOZVLRGRANDEFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREDUCAOZVLRGRANDEINICIAL","Enabled")',ctrl:'vREDUCAOZVLRGRANDEINICIAL',prop:'Enabled'},{ctrl:'CTLSNDELETE',prop:'Enabled'},{ctrl:'CTLALIQUOTAREDUCAOVALOR',prop:'Enabled'},{ctrl:'CTLALIQUOTAREDUCAOCODIGO',prop:'Enabled'},{ctrl:'BUTTON1',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV47ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV17ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV7ReducaoZData',fld:'vREDUCAOZDATA'},{av:'AV9ReducaoZNumIntervencao',fld:'vREDUCAOZNUMINTERVENCAO'},{av:'AV11ReducaoZUltimaOperacao',fld:'vREDUCAOZULTIMAOPERACAO'},{av:'AV12ReducaoZContadorReducao',fld:'vREDUCAOZCONTADORREDUCAO'},{av:'AV14ReducaoZVlrGrandeFinal',fld:'vREDUCAOZVLRGRANDEFINAL'},{av:'AV13ReducaoZVlrGrandeInicial',fld:'vREDUCAOZVLRGRANDEINICIAL'},{av:'AV24Sdt',fld:'vSDT',grid:109},{av:'AV40SomaAliquotas2',fld:'vSOMAALIQUOTAS2'},{av:'A3995ReducaoZEmpresaId',fld:'REDUCAOZEMPRESAID'},{av:'AV34EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5775ReducaoZNumeroLoja',fld:'REDUCAOZNUMEROLOJA'},{av:'A4326ReducaoZSequenciaECF',fld:'REDUCAOZSEQUENCIAECF'},{av:'A3996ReducaoZData',fld:'REDUCAOZDATA'},{av:'AV10ReducaoZPrimeiraOperacao',fld:'vREDUCAOZPRIMEIRAOPERACAO'},{av:'AV15ReducaoZNumeroSerie',fld:'vREDUCAOZNUMEROSERIE'},{av:'AV45ReducaoZDataImpressao',fld:'vREDUCAOZDATAIMPRESSAO'},{av:'AV46ReducaoZHoraImpressao',fld:'vREDUCAOZHORAIMPRESSAO'},{av:'AV16ReducaoZCOOReducao',fld:'vREDUCAOZCOOREDUCAO'},{av:'AV18ReducaoZNumeroUsuarioECF',fld:'vREDUCAOZNUMEROUSUARIOECF'},{av:'AV19ReducaoZLetraMFAdicionalECF',fld:'vREDUCAOZLETRAMFADICIONALECF'},{av:'AV20ReducaoZModeloECF',fld:'vREDUCAOZMODELOECF'},{av:'AV21ReducaoZDescontoISSQNECF',fld:'vREDUCAOZDESCONTOISSQNECF'},{av:'AV43ReducaoZVendaBruta',fld:'vREDUCAOZVENDABRUTA'},{av:'A3434PDVCodigo',fld:'PDVCODIGO'},{av:'AV8PDVCodigo',fld:'vPDVCODIGO',hsh:true},{av:'A3435AliquotaPDV',fld:'ALIQUOTAPDV'},{av:'AV26UsrCod',fld:'vUSRCOD'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'}],[{av:'AV37SnErro',fld:'vSNERRO'},{av:'AV43ReducaoZVendaBruta',fld:'vREDUCAOZVENDABRUTA'},{av:'AV40SomaAliquotas2',fld:'vSOMAALIQUOTAS2'},{av:'AV66GXV2',fld:'vGXV2'},{av:'AV35SdtItem',fld:'vSDTITEM'},{av:'AV24Sdt',fld:'vSDT',grid:109},{av:'AV47ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA'},{av:'AV17ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF'},{av:'AV12ReducaoZContadorReducao',fld:'vREDUCAOZCONTADORREDUCAO'},{av:'AV16ReducaoZCOOReducao',fld:'vREDUCAOZCOOREDUCAO'},{av:'AV7ReducaoZData',fld:'vREDUCAOZDATA'},{av:'AV45ReducaoZDataImpressao',fld:'vREDUCAOZDATAIMPRESSAO'},{av:'AV46ReducaoZHoraImpressao',fld:'vREDUCAOZHORAIMPRESSAO'},{av:'AV21ReducaoZDescontoISSQNECF',fld:'vREDUCAOZDESCONTOISSQNECF'},{av:'AV19ReducaoZLetraMFAdicionalECF',fld:'vREDUCAOZLETRAMFADICIONALECF'},{av:'AV20ReducaoZModeloECF',fld:'vREDUCAOZMODELOECF'},{av:'AV15ReducaoZNumeroSerie',fld:'vREDUCAOZNUMEROSERIE'},{av:'AV18ReducaoZNumeroUsuarioECF',fld:'vREDUCAOZNUMEROUSUARIOECF'},{av:'AV9ReducaoZNumIntervencao',fld:'vREDUCAOZNUMINTERVENCAO'},{av:'AV10ReducaoZPrimeiraOperacao',fld:'vREDUCAOZPRIMEIRAOPERACAO'},{av:'AV11ReducaoZUltimaOperacao',fld:'vREDUCAOZULTIMAOPERACAO'},{av:'AV14ReducaoZVlrGrandeFinal',fld:'vREDUCAOZVLRGRANDEFINAL'},{av:'AV13ReducaoZVlrGrandeInicial',fld:'vREDUCAOZVLRGRANDEINICIAL'},{av:'AV39i',fld:'vI'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV6AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV24Sdt',fld:'vSDT',grid:109},{av:'Gx_mode',fld:'vMODE'}],[{ctrl:'CTLALIQUOTAREDUCAOCODIGO',prop:'Enabled'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV24Sdt", "vSDT", 0, "CollSdtAliquotaReducao.SdtAliquotaReducaoItem");
   this.setVCMap("AV48ReducaoZNumeroLojaParm", "vREDUCAOZNUMEROLOJAPARM", 0, "int");
   this.setVCMap("AV49ReducaoZSequenciaECFParm", "vREDUCAOZSEQUENCIAECFPARM", 0, "int");
   this.setVCMap("AV50ReducaoZDataParm", "vREDUCAOZDATAPARM", 0, "date");
   this.setVCMap("AV8PDVCodigo", "vPDVCODIGO", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV24Sdt", "vSDT", 0, "CollSdtAliquotaReducao.SdtAliquotaReducaoItem");
   Grid1Container.addRefreshingVar({rfrVar:"Gx_mode"});
   Grid1Container.addRefreshingVar({rfrVar:"AV24Sdt"});
   this.addGridBCProperty("Sdt", ["SnDelete"], this.GXValidFnc[110], "AV24Sdt");
   this.addGridBCProperty("Sdt", ["AliquotaReducaoCodigo"], this.GXValidFnc[111], "AV24Sdt");
   this.addGridBCProperty("Sdt", ["AliquotaReducaoValor"], this.GXValidFnc[112], "AV24Sdt");
   this.addGridBCProperty("Sdt", ["AliquotaReducaoDataHoraAlt"], this.GXValidFnc[113], "AV24Sdt");
   this.addGridBCProperty("Sdt", ["AliquotaReducaoUsuarioAlt"], this.GXValidFnc[114], "AV24Sdt");
   this.addGridBCProperty("Sdt", ["Seq"], this.GXValidFnc[115], "AV24Sdt");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrareducaoz());
