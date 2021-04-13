/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:17.56
*/
gx.evt.autoSkip = false;
gx.define('tdecimpprov', false, function () {
   this.ServerClass =  "tdecimpprov" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaprovid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entradaprovid",["gx.O.A5013EntradaProvEmpresaId", "gx.O.A5014EntradaProvId"],[]);
      return true;
   }
   this.Valid_Entradaprovitemsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVITEMSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Decimpprovsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Decimpprovsequencia",["gx.O.A5013EntradaProvEmpresaId", "gx.O.A5014EntradaProvId", "gx.O.A5190EntradaProvItemSequencia", "gx.O.A5191DecImpProvSequencia", "gx.O.A5182DecImpProvNoDI", 'gx.date.urlDate(gx.O.A5183DecImpProvDataRegistro,"DMY4")', "gx.O.A5184DecImpProvExportador", "gx.O.A5185DecImpProvUFDesembaraco", "gx.O.A5186DecImpProvLocalDesembaraco", 'gx.date.urlDate(gx.O.A5187DecImpProvDataDesembaraco,"DMY4")', "gx.O.A5188DecImpProvUsuarioAlt", 'gx.date.urlDateTime(gx.O.A5189DecImpProvDataHoraAlt,"DMY4")'],["A5182DecImpProvNoDI", "A5183DecImpProvDataRegistro", "A5184DecImpProvExportador", "A5185DecImpProvUFDesembaraco", "A5186DecImpProvLocalDesembaraco", "A5187DecImpProvDataDesembaraco", "A5188DecImpProvUsuarioAlt", "A5189DecImpProvDataHoraAlt", "Gx_mode", "Z5013EntradaProvEmpresaId", "Z5014EntradaProvId", "Z5190EntradaProvItemSequencia", "Z5191DecImpProvSequencia", "Z5182DecImpProvNoDI", "Z5183DecImpProvDataRegistro", "Z5184DecImpProvExportador", "Z5185DecImpProvUFDesembaraco", "Z5186DecImpProvLocalDesembaraco", "Z5187DecImpProvDataDesembaraco", "Z5188DecImpProvUsuarioAlt", "Z5189DecImpProvDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.Valid_Decimpprovufdesembaraco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DECIMPPROVUFDESEMBARACO");
         this.AnyError  = 0;
         if ( ! ( this.A5185DecImpProvUFDesembaraco == "" || this.A5185DecImpProvUFDesembaraco == "AC" || this.A5185DecImpProvUFDesembaraco == "AL" || this.A5185DecImpProvUFDesembaraco == "AP" || this.A5185DecImpProvUFDesembaraco == "AM" || this.A5185DecImpProvUFDesembaraco == "BA" || this.A5185DecImpProvUFDesembaraco == "CE" || this.A5185DecImpProvUFDesembaraco == "DF" || this.A5185DecImpProvUFDesembaraco == "ES" || this.A5185DecImpProvUFDesembaraco == "GO" || this.A5185DecImpProvUFDesembaraco == "MA" || this.A5185DecImpProvUFDesembaraco == "MT" || this.A5185DecImpProvUFDesembaraco == "MS" || this.A5185DecImpProvUFDesembaraco == "MG" || this.A5185DecImpProvUFDesembaraco == "PA" || this.A5185DecImpProvUFDesembaraco == "PB" || this.A5185DecImpProvUFDesembaraco == "PR" || this.A5185DecImpProvUFDesembaraco == "PE" || this.A5185DecImpProvUFDesembaraco == "PI" || this.A5185DecImpProvUFDesembaraco == "RJ" || this.A5185DecImpProvUFDesembaraco == "RN" || this.A5185DecImpProvUFDesembaraco == "RS" || this.A5185DecImpProvUFDesembaraco == "RO" || this.A5185DecImpProvUFDesembaraco == "RR" || this.A5185DecImpProvUFDesembaraco == "SC" || this.A5185DecImpProvUFDesembaraco == "SP" || this.A5185DecImpProvUFDesembaraco == "SE" || this.A5185DecImpProvUFDesembaraco == "TO" || this.A5185DecImpProvUFDesembaraco == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF do Desembaraço Aduaneiro fora do intervalo");
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
   this.e118e457_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e128e457_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138e457_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,71,80,82,84];
   this.GXLastCtrlId =84;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovempresaid,isvalid:null,rgrid:[],fld:"ENTRADAPROVEMPRESAID",gxz:"Z5013EntradaProvEmpresaId",gxold:"O5013EntradaProvEmpresaId",gxvar:"A5013EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5013EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.Z5013EntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVEMPRESAID",gx.O.A5013EntradaProvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5013EntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovid,isvalid:null,rgrid:[],fld:"ENTRADAPROVID",gxz:"Z5014EntradaProvId",gxold:"O5014EntradaProvId",gxvar:"A5014EntradaProvId",ucs:[],op:[],ip:[19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5014EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5014EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVID",gx.O.A5014EntradaProvId,0)},c2v:function(){gx.O.A5014EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovitemsequencia,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMSEQUENCIA",gxz:"Z5190EntradaProvItemSequencia",gxold:"O5190EntradaProvItemSequencia",gxvar:"A5190EntradaProvItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5190EntradaProvItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5190EntradaProvItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVITEMSEQUENCIA",gx.O.A5190EntradaProvItemSequencia,0)},c2v:function(){gx.O.A5190EntradaProvItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimpprovsequencia,isvalid:null,rgrid:[],fld:"DECIMPPROVSEQUENCIA",gxz:"Z5191DecImpProvSequencia",gxold:"O5191DecImpProvSequencia",gxvar:"A5191DecImpProvSequencia",ucs:[],op:[70,65,60,55,50,45,40,35],ip:[70,65,60,55,50,45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5191DecImpProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5191DecImpProvSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVSEQUENCIA",gx.O.A5191DecImpProvSequencia,0)},c2v:function(){gx.O.A5191DecImpProvSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPPROVSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVNODI",gxz:"Z5182DecImpProvNoDI",gxold:"O5182DecImpProvNoDI",gxvar:"A5182DecImpProvNoDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5182DecImpProvNoDI=Value},v2z:function(Value){gx.O.Z5182DecImpProvNoDI=Value},v2c:function(){gx.fn.setControlValue("DECIMPPROVNODI",gx.O.A5182DecImpProvNoDI,0)},c2v:function(){gx.O.A5182DecImpProvNoDI=this.val()},val:function(){return gx.fn.getControlValue("DECIMPPROVNODI")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVDATAREGISTRO",gxz:"Z5183DecImpProvDataRegistro",gxold:"O5183DecImpProvDataRegistro",gxvar:"A5183DecImpProvDataRegistro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5183DecImpProvDataRegistro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5183DecImpProvDataRegistro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVDATAREGISTRO",gx.O.A5183DecImpProvDataRegistro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5183DecImpProvDataRegistro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DECIMPPROVDATAREGISTRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVEXPORTADOR",gxz:"Z5184DecImpProvExportador",gxold:"O5184DecImpProvExportador",gxvar:"A5184DecImpProvExportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5184DecImpProvExportador=Value},v2z:function(Value){gx.O.Z5184DecImpProvExportador=Value},v2c:function(){gx.fn.setControlValue("DECIMPPROVEXPORTADOR",gx.O.A5184DecImpProvExportador,0)},c2v:function(){gx.O.A5184DecImpProvExportador=this.val()},val:function(){return gx.fn.getControlValue("DECIMPPROVEXPORTADOR")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimpprovufdesembaraco,isvalid:null,rgrid:[],fld:"DECIMPPROVUFDESEMBARACO",gxz:"Z5185DecImpProvUFDesembaraco",gxold:"O5185DecImpProvUFDesembaraco",gxvar:"A5185DecImpProvUFDesembaraco",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5185DecImpProvUFDesembaraco=Value},v2z:function(Value){gx.O.Z5185DecImpProvUFDesembaraco=Value},v2c:function(){gx.fn.setComboBoxValue("DECIMPPROVUFDESEMBARACO",gx.O.A5185DecImpProvUFDesembaraco);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5185DecImpProvUFDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("DECIMPPROVUFDESEMBARACO")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVLOCALDESEMBARACO",gxz:"Z5186DecImpProvLocalDesembaraco",gxold:"O5186DecImpProvLocalDesembaraco",gxvar:"A5186DecImpProvLocalDesembaraco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5186DecImpProvLocalDesembaraco=Value},v2z:function(Value){gx.O.Z5186DecImpProvLocalDesembaraco=Value},v2c:function(){gx.fn.setControlValue("DECIMPPROVLOCALDESEMBARACO",gx.O.A5186DecImpProvLocalDesembaraco,0)},c2v:function(){gx.O.A5186DecImpProvLocalDesembaraco=this.val()},val:function(){return gx.fn.getControlValue("DECIMPPROVLOCALDESEMBARACO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVDATADESEMBARACO",gxz:"Z5187DecImpProvDataDesembaraco",gxold:"O5187DecImpProvDataDesembaraco",gxvar:"A5187DecImpProvDataDesembaraco",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5187DecImpProvDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5187DecImpProvDataDesembaraco=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVDATADESEMBARACO",gx.O.A5187DecImpProvDataDesembaraco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5187DecImpProvDataDesembaraco=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DECIMPPROVDATADESEMBARACO")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVUSUARIOALT",gxz:"Z5188DecImpProvUsuarioAlt",gxold:"O5188DecImpProvUsuarioAlt",gxvar:"A5188DecImpProvUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5188DecImpProvUsuarioAlt=Value},v2z:function(Value){gx.O.Z5188DecImpProvUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DECIMPPROVUSUARIOALT",gx.O.A5188DecImpProvUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5188DecImpProvUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DECIMPPROVUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVDATAHORAALT",gxz:"Z5189DecImpProvDataHoraAlt",gxold:"O5189DecImpProvDataHoraAlt",gxvar:"A5189DecImpProvDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5189DecImpProvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5189DecImpProvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVDATAHORAALT",gx.O.A5189DecImpProvDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5189DecImpProvDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DECIMPPROVDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[71]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_5013_5014",grid:457};
   this.A5013EntradaProvEmpresaId = "" ;
   this.Z5013EntradaProvEmpresaId = "" ;
   this.O5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.Z5014EntradaProvId = 0 ;
   this.O5014EntradaProvId = 0 ;
   this.A5190EntradaProvItemSequencia = 0 ;
   this.Z5190EntradaProvItemSequencia = 0 ;
   this.O5190EntradaProvItemSequencia = 0 ;
   this.A5191DecImpProvSequencia = 0 ;
   this.Z5191DecImpProvSequencia = 0 ;
   this.O5191DecImpProvSequencia = 0 ;
   this.A5182DecImpProvNoDI = "" ;
   this.Z5182DecImpProvNoDI = "" ;
   this.O5182DecImpProvNoDI = "" ;
   this.A5183DecImpProvDataRegistro = gx.date.nullDate() ;
   this.Z5183DecImpProvDataRegistro = gx.date.nullDate() ;
   this.O5183DecImpProvDataRegistro = gx.date.nullDate() ;
   this.A5184DecImpProvExportador = "" ;
   this.Z5184DecImpProvExportador = "" ;
   this.O5184DecImpProvExportador = "" ;
   this.A5185DecImpProvUFDesembaraco = "" ;
   this.Z5185DecImpProvUFDesembaraco = "" ;
   this.O5185DecImpProvUFDesembaraco = "" ;
   this.A5186DecImpProvLocalDesembaraco = "" ;
   this.Z5186DecImpProvLocalDesembaraco = "" ;
   this.O5186DecImpProvLocalDesembaraco = "" ;
   this.A5187DecImpProvDataDesembaraco = gx.date.nullDate() ;
   this.Z5187DecImpProvDataDesembaraco = gx.date.nullDate() ;
   this.O5187DecImpProvDataDesembaraco = gx.date.nullDate() ;
   this.A5188DecImpProvUsuarioAlt = "" ;
   this.Z5188DecImpProvUsuarioAlt = "" ;
   this.O5188DecImpProvUsuarioAlt = "" ;
   this.A5189DecImpProvDataHoraAlt = gx.date.nullDate() ;
   this.Z5189DecImpProvDataHoraAlt = gx.date.nullDate() ;
   this.O5189DecImpProvDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5190EntradaProvItemSequencia = 0 ;
   this.A5191DecImpProvSequencia = 0 ;
   this.A5182DecImpProvNoDI = "" ;
   this.A5183DecImpProvDataRegistro = gx.date.nullDate() ;
   this.A5184DecImpProvExportador = "" ;
   this.A5185DecImpProvUFDesembaraco = "" ;
   this.A5186DecImpProvLocalDesembaraco = "" ;
   this.A5187DecImpProvDataDesembaraco = gx.date.nullDate() ;
   this.A5188DecImpProvUsuarioAlt = "" ;
   this.A5189DecImpProvDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e128e457_client": ["ENTER", true] ,"e138e457_client": ["CANCEL", true] ,"e118e457_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_5013_5014", [14,19]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdecimpprov());
