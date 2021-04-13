/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:26.78
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoassociadoexcluido', false, function () {
   this.ServerClass =  "hrelacaoassociadoexcluido" ;
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
      this.AV45EmpresaPadraoCla=gx.fn.getControlValue("vEMPRESAPADRAOCLA") ;
      this.AV41ClaTpAssociado=gx.fn.getControlValue("vCLATPASSOCIADO") ;
   };
   this.s112_client=function()
   {
      if ( ! (new gx.date.gxdate("").compare(this.AV43DtInicial)==0) && (new gx.date.gxdate("").compare(this.AV44DtFinal)==0) )
      {
         this.AV44DtFinal =  this.AV43DtInicial  ;
      }
      if ( (""==this.AV30Ordenacao) )
      {
         this.addMessage("Informe a ordenação");
         gx.fn.usrSetFocus("vORDENACAO") ;
         this.AV36tpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( this.AV36tpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV43DtInicial)==0) && (new gx.date.gxdate("").compare(this.AV44DtFinal)==0) )
         {
            this.addMessage("Informe o intervalo de data de cancelamento para seleção");
            gx.fn.usrSetFocus("vDTINICIAL") ;
            this.AV36tpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV36tpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV43DtInicial ).compare( this.AV44DtFinal ) > 0 )
         {
            this.addMessage("Data inicial deve ser menor ou igual a data final");
            gx.fn.usrSetFocus("vDTINICIAL") ;
            this.AV36tpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV36tpErro == 0 )
      {
         if ( this.AV39OpcClassificIni > this.AV40OpcClassificFin )
         {
            this.addMessage("Classificação Inicial deve ser menor ou igual a final");
            gx.fn.usrSetFocus("vOPCCLASSIFICFIN") ;
            this.AV36tpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e1127e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1327e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1527e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,18,20,25,28,32,34,37,39,41,44,46,49,51,53,56,58,64,70,72];
   this.GXLastCtrlId =72;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"TABLE5",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV30Ordenacao",gxold:"OV30Ordenacao",gxvar:"AV30Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30Ordenacao=Value},v2z:function(Value){gx.O.ZV30Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV30Ordenacao)},c2v:function(){gx.O.AV30Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE7",grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIAL",gxz:"ZV43DtInicial",gxold:"OV43DtInicial",gxvar:"AV43DtInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43DtInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV43DtInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIAL",gx.O.AV43DtInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV43DtInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV44DtFinal",gxold:"OV44DtFinal",gxvar:"AV44DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV44DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV44DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV44DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[46]={fld:"TABLE9",grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI",gxz:"ZV39OpcClassificIni",gxold:"OV39OpcClassificIni",gxvar:"AV39OpcClassificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV39OpcClassificIni=Value},v2z:function(Value){gx.O.ZV39OpcClassificIni=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICINI",gx.O.AV39OpcClassificIni)},c2v:function(){gx.O.AV39OpcClassificIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN",gxz:"ZV40OpcClassificFin",gxold:"OV40OpcClassificFin",gxvar:"AV40OpcClassificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV40OpcClassificFin=Value},v2z:function(Value){gx.O.ZV40OpcClassificFin=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCCLASSIFICFIN",gx.O.AV40OpcClassificFin)},c2v:function(){gx.O.AV40OpcClassificFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPEXCLUSAO",gxz:"ZV42TpExclusao",gxold:"OV42TpExclusao",gxvar:"AV42TpExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42TpExclusao=Value},v2z:function(Value){gx.O.ZV42TpExclusao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPEXCLUSAO",gx.O.AV42TpExclusao)},c2v:function(){gx.O.AV42TpExclusao=this.val()},val:function(){return gx.fn.getControlValue("vTPEXCLUSAO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE3",grid:0};
   GXValidFnc[70]={fld:"JS", format:2,grid:0};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   this.AV30Ordenacao = "" ;
   this.ZV30Ordenacao = "" ;
   this.OV30Ordenacao = "" ;
   this.AV43DtInicial = gx.date.nullDate() ;
   this.ZV43DtInicial = gx.date.nullDate() ;
   this.OV43DtInicial = gx.date.nullDate() ;
   this.AV44DtFinal = gx.date.nullDate() ;
   this.ZV44DtFinal = gx.date.nullDate() ;
   this.OV44DtFinal = gx.date.nullDate() ;
   this.AV39OpcClassificIni = "" ;
   this.ZV39OpcClassificIni = "" ;
   this.OV39OpcClassificIni = "" ;
   this.AV40OpcClassificFin = "" ;
   this.ZV40OpcClassificFin = "" ;
   this.OV40OpcClassificFin = "" ;
   this.AV42TpExclusao = "" ;
   this.ZV42TpExclusao = "" ;
   this.OV42TpExclusao = "" ;
   this.AV30Ordenacao = "" ;
   this.AV43DtInicial = gx.date.nullDate() ;
   this.AV44DtFinal = gx.date.nullDate() ;
   this.AV39OpcClassificIni = "" ;
   this.AV40OpcClassificFin = "" ;
   this.AV42TpExclusao = "" ;
   this.AV36tpErro = 0 ;
   this.Events = {"e1127e2_client": ["'FECHAR'", true] ,"e1327e2_client": ["ENTER", true] ,"e1527e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'AV30Ordenacao',fld:'vORDENACAO'},{av:'AV43DtInicial',fld:'vDTINICIAL'},{av:'AV44DtFinal',fld:'vDTFINAL'},{av:'AV42TpExclusao',fld:'vTPEXCLUSAO'},{av:'AV39OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV40OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV48Pgmdesc',fld:'vPGMDESC'},{av:'AV36tpErro',fld:'vTPERRO'}],[{av:'AV36tpErro',fld:'vTPERRO'},{av:'AV29NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV27NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV40OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV39OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV42TpExclusao',fld:'vTPEXCLUSAO'},{av:'AV44DtFinal',fld:'vDTFINAL'},{av:'AV43DtInicial',fld:'vDTINICIAL'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV45EmpresaPadraoCla", "vEMPRESAPADRAOCLA", 0, "char");
   this.setVCMap("AV41ClaTpAssociado", "vCLATPASSOCIADO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoassociadoexcluido());
