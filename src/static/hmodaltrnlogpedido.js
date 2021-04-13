/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:22.57
*/
gx.evt.autoSkip = false;
gx.define('hmodaltrnlogpedido', false, function () {
   this.ServerClass =  "hmodaltrnlogpedido" ;
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
      this.AV11Tipo=gx.fn.getControlValue("vTIPO") ;
   };
   this.s122_client=function()
   {
      this.AV21Erro = gx.num.trunc( 0 ,0) ;
      if ( this.AV11Tipo == "INS" || this.AV11Tipo == "UPD" )
      {
         if ( (new gx.date.gxdate("").compare(this.AV22Data)==0) )
         {
            this.addMessage("Informe a data");
            this.AV21Erro = gx.num.trunc( 1 ,0) ;
            gx.fn.usrSetFocus("vDATA") ;
         }
         else
         {
            if ( (""==this.AV23Hora) && this.AV21Erro == 0 )
            {
               this.addMessage("Informe a hora");
               this.AV21Erro = gx.num.trunc( 1 ,0) ;
               gx.fn.usrSetFocus("vHORA") ;
            }
            else
            {
               if ( (""==this.AV18PedidoCompraLogObservacao) )
               {
                  this.addMessage("Informe a Observação");
                  this.AV21Erro = gx.num.trunc( 1 ,0) ;
                  gx.fn.usrSetFocus("vPEDIDOCOMPRALOGOBSERVACAO") ;
               }
            }
         }
      }
   };
   this.e13p92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11p92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15p92_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,28,31,33,36,38,41,43,46,48,51,53,55,63];
   this.GXLastCtrlId =63;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE6",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANO",gxz:"ZV12PedidoCompraAno",gxold:"OV12PedidoCompraAno",gxvar:"AV12PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV12PedidoCompraAno,0)},c2v:function(){gx.O.AV12PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV13PedidoCompraNumero",gxold:"OV13PedidoCompraNumero",gxvar:"AV13PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV13PedidoCompraNumero,0)},c2v:function(){gx.O.AV13PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRALOGSEQ",gxz:"ZV16PedidoCompraLogSeq",gxold:"OV16PedidoCompraLogSeq",gxvar:"AV16PedidoCompraLogSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PedidoCompraLogSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16PedidoCompraLogSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRALOGSEQ",gx.O.AV16PedidoCompraLogSeq,0)},c2v:function(){gx.O.AV16PedidoCompraLogSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRALOGSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA",gxz:"ZV22Data",gxold:"OV22Data",gxvar:"AV22Data",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Data=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22Data=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA",gx.O.AV22Data,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22Data=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[28]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRALOGDATA",gxz:"ZV17PedidoCompraLogData",gxold:"OV17PedidoCompraLogData",gxvar:"AV17PedidoCompraLogData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PedidoCompraLogData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17PedidoCompraLogData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRALOGDATA",gx.O.AV17PedidoCompraLogData,0)},c2v:function(){gx.O.AV17PedidoCompraLogData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vPEDIDOCOMPRALOGDATA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHORA",gxz:"ZV23Hora",gxold:"OV23Hora",gxvar:"AV23Hora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Hora=Value},v2z:function(Value){gx.O.ZV23Hora=Value},v2c:function(){gx.fn.setControlValue("vHORA",gx.O.AV23Hora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23Hora=this.val()},val:function(){return gx.fn.getControlValue("vHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRALOGDATAPREV",gxz:"ZV27PedidoCompraLOGDataPrev",gxold:"OV27PedidoCompraLOGDataPrev",gxvar:"AV27PedidoCompraLOGDataPrev",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRALOGDATAPREV",gx.O.AV27PedidoCompraLOGDataPrev,0)},c2v:function(){gx.O.AV27PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRALOGDATAPREV")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRALOGOBSERVACAO",gxz:"ZV18PedidoCompraLogObservacao",gxold:"OV18PedidoCompraLogObservacao",gxvar:"AV18PedidoCompraLogObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PedidoCompraLogObservacao=Value},v2z:function(Value){gx.O.ZV18PedidoCompraLogObservacao=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRALOGOBSERVACAO",gx.O.AV18PedidoCompraLogObservacao,0)},c2v:function(){gx.O.AV18PedidoCompraLogObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRALOGOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLE5",grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRALOGUSUARIOALT",gxz:"ZV19PedidoCompraLogUsuarioAlt",gxold:"OV19PedidoCompraLogUsuarioAlt",gxvar:"AV19PedidoCompraLogUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PedidoCompraLogUsuarioAlt=Value},v2z:function(Value){gx.O.ZV19PedidoCompraLogUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRALOGUSUARIOALT",gx.O.AV19PedidoCompraLogUsuarioAlt,0)},c2v:function(){gx.O.AV19PedidoCompraLogUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRALOGUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRALOGDATAHORAALT",gxz:"ZV20PedidoCompraLOGDataHoraAlt",gxold:"OV20PedidoCompraLOGDataHoraAlt",gxvar:"AV20PedidoCompraLOGDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20PedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRALOGDATAHORAALT",gx.O.AV20PedidoCompraLOGDataHoraAlt,0)},c2v:function(){gx.O.AV20PedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vPEDIDOCOMPRALOGDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"JS", format:1,grid:0};
   this.AV12PedidoCompraAno = 0 ;
   this.ZV12PedidoCompraAno = 0 ;
   this.OV12PedidoCompraAno = 0 ;
   this.AV13PedidoCompraNumero = 0 ;
   this.ZV13PedidoCompraNumero = 0 ;
   this.OV13PedidoCompraNumero = 0 ;
   this.AV16PedidoCompraLogSeq = 0 ;
   this.ZV16PedidoCompraLogSeq = 0 ;
   this.OV16PedidoCompraLogSeq = 0 ;
   this.AV22Data = gx.date.nullDate() ;
   this.ZV22Data = gx.date.nullDate() ;
   this.OV22Data = gx.date.nullDate() ;
   this.AV17PedidoCompraLogData = gx.date.nullDate() ;
   this.ZV17PedidoCompraLogData = gx.date.nullDate() ;
   this.OV17PedidoCompraLogData = gx.date.nullDate() ;
   this.AV23Hora = "" ;
   this.ZV23Hora = "" ;
   this.OV23Hora = "" ;
   this.AV27PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.ZV27PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.OV27PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.AV18PedidoCompraLogObservacao = "" ;
   this.ZV18PedidoCompraLogObservacao = "" ;
   this.OV18PedidoCompraLogObservacao = "" ;
   this.AV19PedidoCompraLogUsuarioAlt = "" ;
   this.ZV19PedidoCompraLogUsuarioAlt = "" ;
   this.OV19PedidoCompraLogUsuarioAlt = "" ;
   this.AV20PedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.ZV20PedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.OV20PedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.AV12PedidoCompraAno = 0 ;
   this.AV13PedidoCompraNumero = 0 ;
   this.AV16PedidoCompraLogSeq = 0 ;
   this.AV22Data = gx.date.nullDate() ;
   this.AV17PedidoCompraLogData = gx.date.nullDate() ;
   this.AV23Hora = "" ;
   this.AV27PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.AV18PedidoCompraLogObservacao = "" ;
   this.AV19PedidoCompraLogUsuarioAlt = "" ;
   this.AV20PedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.AV11Tipo = "" ;
   this.AV21Erro = 0 ;
   this.Events = {"e13p92_client": ["ENTER", true] ,"e11p92_client": ["'FECHAR'", true] ,"e15p92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21Erro',fld:'vERRO'},{av:'AV23Hora',fld:'vHORA'},{av:'AV22Data',fld:'vDATA'},{av:'AV11Tipo',fld:'vTIPO',hsh:true},{av:'AV14EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV13PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV16PedidoCompraLogSeq',fld:'vPEDIDOCOMPRALOGSEQ',hsh:true},{av:'AV18PedidoCompraLogObservacao',fld:'vPEDIDOCOMPRALOGOBSERVACAO'},{av:'AV27PedidoCompraLOGDataPrev',fld:'vPEDIDOCOMPRALOGDATAPREV'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV17PedidoCompraLogData',fld:'vPEDIDOCOMPRALOGDATA'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV27PedidoCompraLOGDataPrev',fld:'vPEDIDOCOMPRALOGDATAPREV'},{av:'AV18PedidoCompraLogObservacao',fld:'vPEDIDOCOMPRALOGOBSERVACAO'},{av:'AV16PedidoCompraLogSeq',fld:'vPEDIDOCOMPRALOGSEQ',hsh:true},{av:'AV13PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV12PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV21Erro',fld:'vERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV11Tipo", "vTIPO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaltrnlogpedido());
