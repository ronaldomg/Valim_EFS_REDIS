/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:44.17
*/
gx.evt.autoSkip = false;
gx.define('tagendatipocompromisso', false, function () {
   this.ServerClass =  "tagendatipocompromisso" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV19AgendaTipoCompromissoId=gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOID",'.') ;
      this.AV22AgendaTipoCompromissoDesc=gx.fn.getControlValue("vAGENDATIPOCOMPROMISSODESC") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Agendatipocompromissoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AGENDATIPOCOMPROMISSOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Agendatipocompromissodesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AGENDATIPOCOMPROMISSODESC");
         this.AnyError  = 0;
         if ( (""==this.A8572AgendaTipoCompromissoDesc) )
         {
            try {
               gxballoon.setError("Informe uma Descrição");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Agendatipocompromissocorletra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAGENDATIPOCOMPROMISSOCORLETRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Agendatipocompromissocorletra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AGENDATIPOCOMPROMISSOCORLETRA");
         this.AnyError  = 0;
         if ( (0==this.A8573AgendaTipoCompromissoCorLetra) )
         {
            try {
               gxballoon.setError("Informe uma Cor da Letra");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Agendatipocompromissocorfundo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAGENDATIPOCOMPROMISSOCORFUNDO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Agendatipocompromissocorfundo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("AGENDATIPOCOMPROMISSOCORFUNDO");
         this.AnyError  = 0;
         if ( this.A8573AgendaTipoCompromissoCorLetra == this.A8574AgendaTipoCompromissoCorFundo && ! (0==this.A8574AgendaTipoCompromissoCorFundo) && ! (0==this.A8573AgendaTipoCompromissoCorLetra) )
         {
            try {
               gxballoon.setError("Não é possivel utilizar a mesma cor para Letra e Fundo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      if ( this.Gx_mode != "INS" && this.Gx_mode != "UPD" )
      {
         gx.fn.setCtrlProperty("IMAGELETRA1","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA2","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA3","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA4","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA5","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA6","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA7","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA8","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA9","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGELETRA10","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO1","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO2","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO3","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO4","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO5","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO6","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO7","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO8","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO9","Enabled", 0 );
         gx.fn.setCtrlProperty("IMAGEFUNDO10","Enabled", 0 );
      }
   };
   this.e12c62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13c62_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA1.CLICK", true, null, false, true);
   };
   this.e15c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA2.CLICK", true, null, false, true);
   };
   this.e16c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA3.CLICK", true, null, false, true);
   };
   this.e17c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA4.CLICK", true, null, false, true);
   };
   this.e18c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA5.CLICK", true, null, false, true);
   };
   this.e19c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA6.CLICK", true, null, false, true);
   };
   this.e20c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA7.CLICK", true, null, false, true);
   };
   this.e21c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA8.CLICK", true, null, false, true);
   };
   this.e22c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA9.CLICK", true, null, false, true);
   };
   this.e23c62_client=function()
   {
      this.executeServerEvent("IMAGELETRA10.CLICK", true, null, false, true);
   };
   this.e24c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO1.CLICK", true, null, false, true);
   };
   this.e25c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO2.CLICK", true, null, false, true);
   };
   this.e26c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO3.CLICK", true, null, false, true);
   };
   this.e27c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO4.CLICK", true, null, false, true);
   };
   this.e28c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO5.CLICK", true, null, false, true);
   };
   this.e29c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO6.CLICK", true, null, false, true);
   };
   this.e30c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO7.CLICK", true, null, false, true);
   };
   this.e31c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO8.CLICK", true, null, false, true);
   };
   this.e32c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO9.CLICK", true, null, false, true);
   };
   this.e33c62_client=function()
   {
      this.executeServerEvent("IMAGEFUNDO10.CLICK", true, null, false, true);
   };
   this.e34c6633_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e35c6633_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,36,38,41,43,46,48,51,53,56,58,61,63,66,68,71,73,76,77,78,81,83,86,89,91,94,96,99,101,104,106,109,111,114,116,119,121,124,126,129,131,134,135,136,139,142,144,146,155,157];
   this.GXLastCtrlId =157;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Agendatipocompromissoid,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOID",gxz:"Z8568AgendaTipoCompromissoId",gxold:"O8568AgendaTipoCompromissoId",gxvar:"A8568AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AGENDATIPOCOMPROMISSOID",gx.O.A8568AgendaTipoCompromissoId,0)},c2v:function(){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AGENDATIPOCOMPROMISSOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agendatipocompromissodesc,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSODESC",gxz:"Z8572AgendaTipoCompromissoDesc",gxold:"O8572AgendaTipoCompromissoDesc",gxvar:"A8572AgendaTipoCompromissoDesc",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8572AgendaTipoCompromissoDesc=Value},v2z:function(Value){gx.O.Z8572AgendaTipoCompromissoDesc=Value},v2c:function(){gx.fn.setControlValue("AGENDATIPOCOMPROMISSODESC",gx.O.A8572AgendaTipoCompromissoDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8572AgendaTipoCompromissoDesc=this.val()},val:function(){return gx.fn.getControlValue("AGENDATIPOCOMPROMISSODESC")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={fld:"TABCORLETRA1",grid:0};
   GXValidFnc[31]={fld:"IMAGELETRA1",grid:0};
   GXValidFnc[33]={fld:"TABCORLETRA2",grid:0};
   GXValidFnc[36]={fld:"IMAGELETRA2",grid:0};
   GXValidFnc[38]={fld:"TABCORLETRA3",grid:0};
   GXValidFnc[41]={fld:"IMAGELETRA3",grid:0};
   GXValidFnc[43]={fld:"TABCORLETRA4",grid:0};
   GXValidFnc[46]={fld:"IMAGELETRA4",grid:0};
   GXValidFnc[48]={fld:"TABCORLETRA5",grid:0};
   GXValidFnc[51]={fld:"IMAGELETRA5",grid:0};
   GXValidFnc[53]={fld:"TABCORLETRA6",grid:0};
   GXValidFnc[56]={fld:"IMAGELETRA6",grid:0};
   GXValidFnc[58]={fld:"TABCORLETRA7",grid:0};
   GXValidFnc[61]={fld:"IMAGELETRA7",grid:0};
   GXValidFnc[63]={fld:"TABCORLETRA8",grid:0};
   GXValidFnc[66]={fld:"IMAGELETRA8",grid:0};
   GXValidFnc[68]={fld:"TABCORLETRA9",grid:0};
   GXValidFnc[71]={fld:"IMAGELETRA9",grid:0};
   GXValidFnc[73]={fld:"TABCORLETRA10",grid:0};
   GXValidFnc[76]={fld:"IMAGELETRA10",grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Agendatipocompromissocorletra,isvalid:null,rgrid:[],fld:"vAGENDATIPOCOMPROMISSOCORLETRA",gxz:"ZV18AgendaTipoCompromissoCorLetra",gxold:"OV18AgendaTipoCompromissoCorLetra",gxvar:"AV18AgendaTipoCompromissoCorLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18AgendaTipoCompromissoCorLetra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18AgendaTipoCompromissoCorLetra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSOCORLETRA",gx.O.AV18AgendaTipoCompromissoCorLetra,0)},c2v:function(){gx.O.AV18AgendaTipoCompromissoCorLetra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOCORLETRA",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agendatipocompromissocorletra,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOCORLETRA",gxz:"Z8573AgendaTipoCompromissoCorLetra",gxold:"O8573AgendaTipoCompromissoCorLetra",gxvar:"A8573AgendaTipoCompromissoCorLetra",ucs:[],op:[78],ip:[78],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8573AgendaTipoCompromissoCorLetra=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8573AgendaTipoCompromissoCorLetra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AGENDATIPOCOMPROMISSOCORLETRA",gx.O.A8573AgendaTipoCompromissoCorLetra,0)},c2v:function(){gx.O.A8573AgendaTipoCompromissoCorLetra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AGENDATIPOCOMPROMISSOCORLETRA",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[83]={fld:"TABLE4",grid:0};
   GXValidFnc[86]={fld:"TABCORFUNDO1",grid:0};
   GXValidFnc[89]={fld:"IMAGEFUNDO1",grid:0};
   GXValidFnc[91]={fld:"TABCORFUNDO2",grid:0};
   GXValidFnc[94]={fld:"IMAGEFUNDO2",grid:0};
   GXValidFnc[96]={fld:"TABCORFUNDO3",grid:0};
   GXValidFnc[99]={fld:"IMAGEFUNDO3",grid:0};
   GXValidFnc[101]={fld:"TABCORFUNDO4",grid:0};
   GXValidFnc[104]={fld:"IMAGEFUNDO4",grid:0};
   GXValidFnc[106]={fld:"TABCORFUNDO5",grid:0};
   GXValidFnc[109]={fld:"IMAGEFUNDO5",grid:0};
   GXValidFnc[111]={fld:"TABCORFUNDO6",grid:0};
   GXValidFnc[114]={fld:"IMAGEFUNDO6",grid:0};
   GXValidFnc[116]={fld:"TABCORFUNDO7",grid:0};
   GXValidFnc[119]={fld:"IMAGEFUNDO7",grid:0};
   GXValidFnc[121]={fld:"TABCORFUNDO8",grid:0};
   GXValidFnc[124]={fld:"IMAGEFUNDO8",grid:0};
   GXValidFnc[126]={fld:"TABCORFUNDO9",grid:0};
   GXValidFnc[129]={fld:"IMAGEFUNDO9",grid:0};
   GXValidFnc[131]={fld:"TABCORFUNDO10",grid:0};
   GXValidFnc[134]={fld:"IMAGEFUNDO10",grid:0};
   GXValidFnc[135]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Agendatipocompromissocorfundo,isvalid:null,rgrid:[],fld:"vAGENDATIPOCOMPROMISSOCORFUNDO",gxz:"ZV20AgendaTipoCompromissoCorFundo",gxold:"OV20AgendaTipoCompromissoCorFundo",gxvar:"AV20AgendaTipoCompromissoCorFundo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AgendaTipoCompromissoCorFundo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AgendaTipoCompromissoCorFundo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSOCORFUNDO",gx.O.AV20AgendaTipoCompromissoCorFundo,0)},c2v:function(){gx.O.AV20AgendaTipoCompromissoCorFundo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOCORFUNDO",'.')},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Agendatipocompromissocorfundo,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOCORFUNDO",gxz:"Z8574AgendaTipoCompromissoCorFundo",gxold:"O8574AgendaTipoCompromissoCorFundo",gxvar:"A8574AgendaTipoCompromissoCorFundo",ucs:[],op:[136,78],ip:[136,78],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8574AgendaTipoCompromissoCorFundo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8574AgendaTipoCompromissoCorFundo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("AGENDATIPOCOMPROMISSOCORFUNDO",gx.O.A8574AgendaTipoCompromissoCorFundo,0)},c2v:function(){gx.O.A8574AgendaTipoCompromissoCorFundo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("AGENDATIPOCOMPROMISSOCORFUNDO",'.')},nac:gx.falseFn};
   GXValidFnc[139]={fld:"TABLE5",grid:0};
   GXValidFnc[142]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOUSUALT",gxz:"Z8575AgendaTipoCompromissoUsuAlt",gxold:"O8575AgendaTipoCompromissoUsuAlt",gxvar:"A8575AgendaTipoCompromissoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8575AgendaTipoCompromissoUsuAlt=Value},v2z:function(Value){gx.O.Z8575AgendaTipoCompromissoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("AGENDATIPOCOMPROMISSOUSUALT",gx.O.A8575AgendaTipoCompromissoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8575AgendaTipoCompromissoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("AGENDATIPOCOMPROMISSOUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 144 , function() {
   });
   GXValidFnc[146]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSODTUSUALT",gxz:"Z8576AgendaTipoCompromissoDtUsuAlt",gxold:"O8576AgendaTipoCompromissoDtUsuAlt",gxvar:"A8576AgendaTipoCompromissoDtUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8576AgendaTipoCompromissoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8576AgendaTipoCompromissoDtUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("AGENDATIPOCOMPROMISSODTUSUALT",gx.O.A8576AgendaTipoCompromissoDtUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8576AgendaTipoCompromissoDtUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("AGENDATIPOCOMPROMISSODTUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 146 , function() {
   });
   GXValidFnc[155]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[157]={fld:"BTNHELP",grid:0};
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.Z8568AgendaTipoCompromissoId = 0 ;
   this.O8568AgendaTipoCompromissoId = 0 ;
   this.A8572AgendaTipoCompromissoDesc = "" ;
   this.Z8572AgendaTipoCompromissoDesc = "" ;
   this.O8572AgendaTipoCompromissoDesc = "" ;
   this.AV18AgendaTipoCompromissoCorLetra = 0 ;
   this.ZV18AgendaTipoCompromissoCorLetra = 0 ;
   this.OV18AgendaTipoCompromissoCorLetra = 0 ;
   this.A8573AgendaTipoCompromissoCorLetra = 0 ;
   this.Z8573AgendaTipoCompromissoCorLetra = 0 ;
   this.O8573AgendaTipoCompromissoCorLetra = 0 ;
   this.AV20AgendaTipoCompromissoCorFundo = 0 ;
   this.ZV20AgendaTipoCompromissoCorFundo = 0 ;
   this.OV20AgendaTipoCompromissoCorFundo = 0 ;
   this.A8574AgendaTipoCompromissoCorFundo = 0 ;
   this.Z8574AgendaTipoCompromissoCorFundo = 0 ;
   this.O8574AgendaTipoCompromissoCorFundo = 0 ;
   this.A8575AgendaTipoCompromissoUsuAlt = "" ;
   this.Z8575AgendaTipoCompromissoUsuAlt = "" ;
   this.O8575AgendaTipoCompromissoUsuAlt = "" ;
   this.A8576AgendaTipoCompromissoDtUsuAlt = gx.date.nullDate() ;
   this.Z8576AgendaTipoCompromissoDtUsuAlt = gx.date.nullDate() ;
   this.O8576AgendaTipoCompromissoDtUsuAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19AgendaTipoCompromissoId = 0 ;
   this.AV22AgendaTipoCompromissoDesc = "" ;
   this.AV18AgendaTipoCompromissoCorLetra = 0 ;
   this.AV20AgendaTipoCompromissoCorFundo = 0 ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A8573AgendaTipoCompromissoCorLetra = 0 ;
   this.A8574AgendaTipoCompromissoCorFundo = 0 ;
   this.A8572AgendaTipoCompromissoDesc = "" ;
   this.AV21SnAlterou = "" ;
   this.A8575AgendaTipoCompromissoUsuAlt = "" ;
   this.A8576AgendaTipoCompromissoDtUsuAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12c62_client": ["'FECHAR'", true] ,"e13c62_client": ["AFTER TRN", true] ,"e14c62_client": ["IMAGELETRA1.CLICK", true] ,"e15c62_client": ["IMAGELETRA2.CLICK", true] ,"e16c62_client": ["IMAGELETRA3.CLICK", true] ,"e17c62_client": ["IMAGELETRA4.CLICK", true] ,"e18c62_client": ["IMAGELETRA5.CLICK", true] ,"e19c62_client": ["IMAGELETRA6.CLICK", true] ,"e20c62_client": ["IMAGELETRA7.CLICK", true] ,"e21c62_client": ["IMAGELETRA8.CLICK", true] ,"e22c62_client": ["IMAGELETRA9.CLICK", true] ,"e23c62_client": ["IMAGELETRA10.CLICK", true] ,"e24c62_client": ["IMAGEFUNDO1.CLICK", true] ,"e25c62_client": ["IMAGEFUNDO2.CLICK", true] ,"e26c62_client": ["IMAGEFUNDO3.CLICK", true] ,"e27c62_client": ["IMAGEFUNDO4.CLICK", true] ,"e28c62_client": ["IMAGEFUNDO5.CLICK", true] ,"e29c62_client": ["IMAGEFUNDO6.CLICK", true] ,"e30c62_client": ["IMAGEFUNDO7.CLICK", true] ,"e31c62_client": ["IMAGEFUNDO8.CLICK", true] ,"e32c62_client": ["IMAGEFUNDO9.CLICK", true] ,"e33c62_client": ["IMAGEFUNDO10.CLICK", true] ,"e34c6633_client": ["ENTER", true] ,"e35c6633_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV22AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[]];
   this.EvtParms["IMAGELETRA1.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA2.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA3.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA4.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA5.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA6.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA7.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA8.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA9.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGELETRA10.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'}]];
   this.EvtParms["IMAGEFUNDO1.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO2.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO3.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO4.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO5.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO6.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO7.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO8.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO9.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EvtParms["IMAGEFUNDO10.CLICK"] = [[{av:'AV18AgendaTipoCompromissoCorLetra',fld:'vAGENDATIPOCOMPROMISSOCORLETRA'},{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}],[{av:'AV20AgendaTipoCompromissoCorFundo',fld:'vAGENDATIPOCOMPROMISSOCORFUNDO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19AgendaTipoCompromissoId", "vAGENDATIPOCOMPROMISSOID", 0, "int");
   this.setVCMap("AV22AgendaTipoCompromissoDesc", "vAGENDATIPOCOMPROMISSODESC", 0, "svchar");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 633 ]= ["O8574AgendaTipoCompromissoCorFundo","O8573AgendaTipoCompromissoCorLetra","O8572AgendaTipoCompromissoDesc"] ;
});
gx.setParentObj(new tagendatipocompromisso());
