/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:12.45
*/
gx.evt.autoSkip = false;
gx.define('hregistrarentradaadicaodec', false, function () {
   this.ServerClass =  "hregistrarentradaadicaodec" ;
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
      this.AV9EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID") ;
      this.AV10EntradaId=gx.fn.getIntegerValue("vENTRADAID",'.') ;
      this.AV11EntradaItemSequencia=gx.fn.getIntegerValue("vENTRADAITEMSEQUENCIA",'.') ;
      this.AV12DecImportacaoSequencia=gx.fn.getIntegerValue("vDECIMPORTACAOSEQUENCIA",'.') ;
      this.AV13DecImportacaoAdicaoSeq=gx.fn.getIntegerValue("vDECIMPORTACAOADICAOSEQ",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.s132_client=function()
   {
      this.AV14SnErro =  "N"  ;
      if ( (0==this.AV5DecImportacaoAdicaoNo) )
      {
         this.addMessage("Informe o Número do Documento");
         gx.fn.usrSetFocus("vDECIMPORTACAOADICAONO") ;
         this.AV14SnErro =  "S"  ;
      }
      else
      {
         if ( (""==this.AV6DecImportacaoAdicaoFabricante) )
         {
            this.addMessage("Informe o Fabricante");
            gx.fn.usrSetFocus("vDECIMPORTACAOADICAOFABRICANTE") ;
            this.AV14SnErro =  "S"  ;
         }
      }
   };
   this.e11yf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13yf2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16yf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,24,26,29,31,34,36,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK206", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOADICAONO",gxz:"ZV5DecImportacaoAdicaoNo",gxold:"OV5DecImportacaoAdicaoNo",gxvar:"AV5DecImportacaoAdicaoNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5DecImportacaoAdicaoNo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5DecImportacaoAdicaoNo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOADICAONO",gx.O.AV5DecImportacaoAdicaoNo,0)},c2v:function(){gx.O.AV5DecImportacaoAdicaoNo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDECIMPORTACAOADICAONO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK207", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOADICAOFABRICANTE",gxz:"ZV6DecImportacaoAdicaoFabricante",gxold:"OV6DecImportacaoAdicaoFabricante",gxvar:"AV6DecImportacaoAdicaoFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6DecImportacaoAdicaoFabricante=Value},v2z:function(Value){gx.O.ZV6DecImportacaoAdicaoFabricante=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOADICAOFABRICANTE",gx.O.AV6DecImportacaoAdicaoFabricante,0)},c2v:function(){gx.O.AV6DecImportacaoAdicaoFabricante=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOADICAOFABRICANTE")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK208", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOADICAODESCONTO",gxz:"ZV7DecImportacaoAdicaoDesconto",gxold:"OV7DecImportacaoAdicaoDesconto",gxvar:"AV7DecImportacaoAdicaoDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DecImportacaoAdicaoDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV7DecImportacaoAdicaoDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDECIMPORTACAOADICAODESCONTO",gx.O.AV7DecImportacaoAdicaoDesconto,2,',')},c2v:function(){gx.O.AV7DecImportacaoAdicaoDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vDECIMPORTACAOADICAODESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"ZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOADICAONDRAWADICOES",gxz:"ZV17DecImportacaoAdicaonDrawAdicoes",gxold:"OV17DecImportacaoAdicaonDrawAdicoes",gxvar:"AV17DecImportacaoAdicaonDrawAdicoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DecImportacaoAdicaonDrawAdicoes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17DecImportacaoAdicaonDrawAdicoes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOADICAONDRAWADICOES",gx.O.AV17DecImportacaoAdicaonDrawAdicoes,0)},c2v:function(){gx.O.AV17DecImportacaoAdicaonDrawAdicoes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDECIMPORTACAOADICAONDRAWADICOES",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOADICAOXPEDITEM",gxz:"ZV18DecImportacaoAdicaoXPedItem",gxold:"OV18DecImportacaoAdicaoXPedItem",gxvar:"AV18DecImportacaoAdicaoXPedItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DecImportacaoAdicaoXPedItem=Value},v2z:function(Value){gx.O.ZV18DecImportacaoAdicaoXPedItem=Value},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOADICAOXPEDITEM",gx.O.AV18DecImportacaoAdicaoXPedItem,0)},c2v:function(){gx.O.AV18DecImportacaoAdicaoXPedItem=this.val()},val:function(){return gx.fn.getControlValue("vDECIMPORTACAOADICAOXPEDITEM")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDECIMPORTACAOADICAONITEMPED",gxz:"ZV19DecImportacaoAdicaoNItemPed",gxold:"OV19DecImportacaoAdicaoNItemPed",gxvar:"AV19DecImportacaoAdicaoNItemPed",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19DecImportacaoAdicaoNItemPed=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19DecImportacaoAdicaoNItemPed=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDECIMPORTACAOADICAONITEMPED",gx.O.AV19DecImportacaoAdicaoNItemPed,0)},c2v:function(){gx.O.AV19DecImportacaoAdicaoNItemPed=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDECIMPORTACAOADICAONITEMPED",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"JAVASCRIPT", format:2,grid:0};
   this.AV5DecImportacaoAdicaoNo = 0 ;
   this.ZV5DecImportacaoAdicaoNo = 0 ;
   this.OV5DecImportacaoAdicaoNo = 0 ;
   this.AV6DecImportacaoAdicaoFabricante = "" ;
   this.ZV6DecImportacaoAdicaoFabricante = "" ;
   this.OV6DecImportacaoAdicaoFabricante = "" ;
   this.AV7DecImportacaoAdicaoDesconto = 0 ;
   this.ZV7DecImportacaoAdicaoDesconto = 0 ;
   this.OV7DecImportacaoAdicaoDesconto = 0 ;
   this.AV17DecImportacaoAdicaonDrawAdicoes = 0 ;
   this.ZV17DecImportacaoAdicaonDrawAdicoes = 0 ;
   this.OV17DecImportacaoAdicaonDrawAdicoes = 0 ;
   this.AV18DecImportacaoAdicaoXPedItem = "" ;
   this.ZV18DecImportacaoAdicaoXPedItem = "" ;
   this.OV18DecImportacaoAdicaoXPedItem = "" ;
   this.AV19DecImportacaoAdicaoNItemPed = 0 ;
   this.ZV19DecImportacaoAdicaoNItemPed = 0 ;
   this.OV19DecImportacaoAdicaoNItemPed = 0 ;
   this.AV5DecImportacaoAdicaoNo = 0 ;
   this.AV6DecImportacaoAdicaoFabricante = "" ;
   this.AV7DecImportacaoAdicaoDesconto = 0 ;
   this.AV17DecImportacaoAdicaonDrawAdicoes = 0 ;
   this.AV18DecImportacaoAdicaoXPedItem = "" ;
   this.AV19DecImportacaoAdicaoNItemPed = 0 ;
   this.AV9EntradaEmpresaId = "" ;
   this.AV10EntradaId = 0 ;
   this.AV11EntradaItemSequencia = 0 ;
   this.AV12DecImportacaoSequencia = 0 ;
   this.AV13DecImportacaoAdicaoSeq = 0 ;
   this.A5181DecImportacaoAdicaoSeq = 0 ;
   this.A5175DecImportacaoSequencia = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A5176DecImportacaoAdicaoNo = 0 ;
   this.A5177DecImportacaoAdicaoFabricante = "" ;
   this.A5178DecImportacaoAdicaoDesconto = 0 ;
   this.A10393DecImportacaoAdicaonDrawAdicoe = 0 ;
   this.A10395DecImportacaoAdicaoXPedItem = "" ;
   this.A10394DecImportacaoAdicaoNItemPed = 0 ;
   this.Gx_mode = "" ;
   this.AV14SnErro = "" ;
   this.Events = {"e11yf2_client": ["'FECHAR'", true] ,"e13yf2_client": ["ENTER", true] ,"e16yf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE'}],[{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOADICAODESCONTO","Enabled")',ctrl:'vDECIMPORTACAOADICAODESCONTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOADICAOFABRICANTE","Enabled")',ctrl:'vDECIMPORTACAOADICAOFABRICANTE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOADICAONO","Enabled")',ctrl:'vDECIMPORTACAOADICAONO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOADICAONDRAWADICOES","Enabled")',ctrl:'vDECIMPORTACAOADICAONDRAWADICOES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOADICAOXPEDITEM","Enabled")',ctrl:'vDECIMPORTACAOADICAOXPEDITEM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDECIMPORTACAOADICAONITEMPED","Enabled")',ctrl:'vDECIMPORTACAOADICAONITEMPED',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15SnOk',fld:'vSNOK'},{av:'Gx_mode',fld:'vMODE'}],[{av:'AV15SnOk',fld:'vSNOK'}]];
   this.EvtParms["ENTER"] = [[{av:'AV14SnErro',fld:'vSNERRO'},{av:'AV9EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV10EntradaId',fld:'vENTRADAID',hsh:true},{av:'AV11EntradaItemSequencia',fld:'vENTRADAITEMSEQUENCIA',hsh:true},{av:'AV12DecImportacaoSequencia',fld:'vDECIMPORTACAOSEQUENCIA',hsh:true},{av:'AV13DecImportacaoAdicaoSeq',fld:'vDECIMPORTACAOADICAOSEQ',hsh:true},{av:'AV5DecImportacaoAdicaoNo',fld:'vDECIMPORTACAOADICAONO'},{av:'AV6DecImportacaoAdicaoFabricante',fld:'vDECIMPORTACAOADICAOFABRICANTE'},{av:'AV7DecImportacaoAdicaoDesconto',fld:'vDECIMPORTACAOADICAODESCONTO'},{av:'AV17DecImportacaoAdicaonDrawAdicoes',fld:'vDECIMPORTACAOADICAONDRAWADICOES'},{av:'AV18DecImportacaoAdicaoXPedItem',fld:'vDECIMPORTACAOADICAOXPEDITEM'},{av:'AV19DecImportacaoAdicaoNItemPed',fld:'vDECIMPORTACAOADICAONITEMPED'},{av:'Gx_mode',fld:'vMODE'},{av:'AV15SnOk',fld:'vSNOK'}],[{av:'Gx_mode',fld:'vMODE'},{av:'AV13DecImportacaoAdicaoSeq',fld:'vDECIMPORTACAOADICAOSEQ',hsh:true},{av:'AV15SnOk',fld:'vSNOK'},{av:'AV14SnErro',fld:'vSNERRO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV9EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV10EntradaId", "vENTRADAID", 0, "int");
   this.setVCMap("AV11EntradaItemSequencia", "vENTRADAITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV12DecImportacaoSequencia", "vDECIMPORTACAOSEQUENCIA", 0, "int");
   this.setVCMap("AV13DecImportacaoAdicaoSeq", "vDECIMPORTACAOADICAOSEQ", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarentradaadicaodec());
