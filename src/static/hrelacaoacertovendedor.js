/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:31:28.18
*/
gx.evt.autoSkip = false;
gx.define('hrelacaoacertovendedor', false, function () {
   this.ServerClass =  "hrelacaoacertovendedor" ;
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
   this.s112_client=function()
   {
      this.AV20TpErro = gx.num.trunc( 0 ,0) ;
      if ( (""==this.AV28TpRelatorio) )
      {
         this.addMessage("Informe o tipo de relatório a ser impresso");
         gx.fn.usrSetFocus("vTPRELATORIO") ;
         this.AV20TpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( this.AV20TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV21DataInicial)==0) )
         {
            this.addMessage("Informe a data inicial");
            gx.fn.usrSetFocus("vDATAINICIAL") ;
            this.AV20TpErro = gx.num.trunc( 1 ,0) ;
         }
         else
         {
            if ( (new gx.date.gxdate("").compare(this.AV22DataFinal)==0) )
            {
               this.addMessage("Informe a data final");
               gx.fn.usrSetFocus("vDATAFINAL") ;
               this.AV20TpErro = gx.num.trunc( 1 ,0) ;
            }
         }
      }
      if ( this.AV20TpErro == 0 )
      {
         if ( new gx.date.gxdate( this.AV21DataInicial ).compare( this.AV22DataFinal ) > 0 )
         {
            this.addMessage("Data Inicial deve ser menor que a Final");
            gx.fn.usrSetFocus("vDATAINICIAL") ;
            this.AV20TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV20TpErro == 0 )
      {
         if ( this.AV23VendedorInicial > this.AV24VendedorFinal )
         {
            this.addMessage("Vendedor Inicial deve ser menor que o Final");
            gx.fn.usrSetFocus("vVENDEDORINICIAL") ;
            this.AV20TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e11fy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,21,23,26,28,31,33,35,38,40,43,45,47,56,58,60,61];
   this.GXLastCtrlId =61;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPRELATORIO",gxz:"ZV28TpRelatorio",gxold:"OV28TpRelatorio",gxvar:"AV28TpRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TpRelatorio=Value},v2z:function(Value){gx.O.ZV28TpRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vTPRELATORIO",gx.O.AV28TpRelatorio)},c2v:function(){gx.O.AV28TpRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vTPRELATORIO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[28]={fld:"TABLERDTACERTO",grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV21DataInicial",gxold:"OV21DataInicial",gxvar:"AV21DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV21DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV22DataFinal",gxold:"OV22DataFinal",gxvar:"AV22DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV22DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[40]={fld:"TABLERVENDEDORES",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORINICIAL",gxz:"ZV23VendedorInicial",gxold:"OV23VendedorInicial",gxvar:"AV23VendedorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23VendedorInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23VendedorInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORINICIAL",gx.O.AV23VendedorInicial,0)},c2v:function(){gx.O.AV23VendedorInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORFINAL",gxz:"ZV24VendedorFinal",gxold:"OV24VendedorFinal",gxvar:"AV24VendedorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24VendedorFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24VendedorFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORFINAL",gx.O.AV24VendedorFinal,0)},c2v:function(){gx.O.AV24VendedorFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"JS", format:2,grid:0};
   GXValidFnc[58]={fld:"BTNHELP",grid:0};
   GXValidFnc[60]={fld:"PROMPT_VENDEDORINICIAL",grid:0};
   GXValidFnc[61]={fld:"PROMPT_VENDEDORFINAL",grid:0};
   this.AV28TpRelatorio = "" ;
   this.ZV28TpRelatorio = "" ;
   this.OV28TpRelatorio = "" ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.ZV21DataInicial = gx.date.nullDate() ;
   this.OV21DataInicial = gx.date.nullDate() ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.ZV22DataFinal = gx.date.nullDate() ;
   this.OV22DataFinal = gx.date.nullDate() ;
   this.AV23VendedorInicial = 0 ;
   this.ZV23VendedorInicial = 0 ;
   this.OV23VendedorInicial = 0 ;
   this.AV24VendedorFinal = 0 ;
   this.ZV24VendedorFinal = 0 ;
   this.OV24VendedorFinal = 0 ;
   this.AV28TpRelatorio = "" ;
   this.AV21DataInicial = gx.date.nullDate() ;
   this.AV22DataFinal = gx.date.nullDate() ;
   this.AV23VendedorInicial = 0 ;
   this.AV24VendedorFinal = 0 ;
   this.AV20TpErro = 0 ;
   this.Events = {"e11fy2_client": ["'FECHAR'", true] ,"e13fy2_client": ["ENTER", true] ,"e15fy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20TpErro',fld:'vTPERRO'},{av:'AV54Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28TpRelatorio',fld:'vTPRELATORIO'},{av:'AV21DataInicial',fld:'vDATAINICIAL'},{av:'AV22DataFinal',fld:'vDATAFINAL'},{av:'AV23VendedorInicial',fld:'vVENDEDORINICIAL'},{av:'AV24VendedorFinal',fld:'vVENDEDORFINAL'},{av:'AV53Pgmdesc',fld:'vPGMDESC'}],[{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV24VendedorFinal',fld:'vVENDEDORFINAL'},{av:'AV23VendedorInicial',fld:'vVENDEDORINICIAL'},{av:'AV22DataFinal',fld:'vDATAFINAL'},{av:'AV21DataInicial',fld:'vDATAINICIAL'},{av:'AV28TpRelatorio',fld:'vTPRELATORIO'},{av:'AV20TpErro',fld:'vTPERRO'}]];
   this.setPrompt("PROMPT_VENDEDORINICIAL", [43]);
   this.setPrompt("PROMPT_VENDEDORFINAL", [47]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaoacertovendedor());
