/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:36:35.83
*/
gx.evt.autoSkip = false;
gx.define('tcontaocorrencia', false, function () {
   this.ServerClass =  "tcontaocorrencia" ;
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
      this.AV17ContaPagRecNumero=gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.') ;
      this.AV18ContaOcorrenciaSequencia=gx.fn.getIntegerValue("vCONTAOCORRENCIASEQUENCIA",'.') ;
      this.AV31Hora=gx.fn.getIntegerValue("vHORA",'.') ;
      this.AV32Minu=gx.fn.getIntegerValue("vMINU",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1685ContaPagRecEmpresaId=gx.fn.getControlValue("CONTAPAGRECEMPRESAID") ;
      this.AV19ContaOcorrenciaOcoEmpId=gx.fn.getControlValue("vCONTAOCORRENCIAOCOEMPID") ;
      this.AV20ContaOcorrenciaTpCobEmpId=gx.fn.getControlValue("vCONTAOCORRENCIATPCOBEMPID") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV36LogContaPagRecEmpresaId=gx.fn.getControlValue("vLOGCONTAPAGRECEMPRESAID") ;
      this.AV37LogContaPagRecNumero=gx.fn.getIntegerValue("vLOGCONTAPAGRECNUMERO",'.') ;
      this.AV38LogContaOcorrenciaSequencia=gx.fn.getIntegerValue("vLOGCONTAOCORRENCIASEQUENCIA",'.') ;
      this.AV33ContaOcorrenciaHora=gx.fn.getControlValue("vCONTAOCORRENCIAHORA") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV24ValorParametro=gx.fn.getControlValue("vVALORPARAMETRO") ;
      this.AV35lContaOcorrencias=gx.fn.getControlValue("vLCONTAOCORRENCIAS") ;
      this.AV39LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV42Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV26ClienteId=gx.fn.getIntegerValue("vCLIENTEID",'.') ;
      this.AV27Fantasia=gx.fn.getControlValue("vFANTASIA") ;
      this.AV28TpPagRec=gx.fn.getControlValue("vTPPAGREC") ;
      this.AV30StConta=gx.fn.getControlValue("vSTCONTA") ;
   };
   this.Valid_Contapagrecnumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contapagrecnumero",["gx.O.A1685ContaPagRecEmpresaId", "gx.O.A1686ContaPagRecNumero"],[]);
      return true;
   }
   this.Valid_Contaocorrenciasequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIASEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaocorrenciadata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIADATA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (new gx.date.gxdate("").compare(this.A1910ContaOcorrenciaData)==0) )
         {
            try {
               gxballoon.setError("Informe a Data da Ocorrência.");
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
   this.Valid_Contaocorrenciahora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIAHORA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (""==this.A1911ContaOcorrenciaHora) )
         {
            try {
               gxballoon.setError("Informe a Hora da Ocorrência.");
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
   this.Valid_Contaocorrenciaocoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIAOCOID");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A1902ContaOcorrenciaOcoId) )
            {
               this.A1901ContaOcorrenciaOcoEmpId =  this.AV19ContaOcorrenciaOcoEmpId  ;
            }
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( (0==this.A1902ContaOcorrenciaOcoId) )
         {
            try {
               gxballoon.setError("Informe o Código da Ocorrência.");
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
   this.Valid_Contaocorrenciaocodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIAOCODESCRICAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaocorrenciaocoempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contaocorrenciaocoempid",["gx.O.Gx_mode", "gx.O.O1901ContaOcorrenciaOcoEmpId", "gx.O.A1901ContaOcorrenciaOcoEmpId", "gx.O.A1902ContaOcorrenciaOcoId", "gx.O.A1903ContaOcorrenciaOcoDescricao"],["O1903ContaOcorrenciaOcoDescricao", "A1903ContaOcorrenciaOcoDescricao", ["AV35lContaOcorrencias","Acontaocorrenciaocoempid"]]);
      return true;
   }
   this.Valid_Contaocorrenciaalineaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contaocorrenciaalineaid",["gx.O.Gx_mode", "gx.O.O1904ContaOcorrenciaAlineaId", "gx.O.O1905ContaOcorrenciaAlineaDescricao", "gx.O.A1904ContaOcorrenciaAlineaId", "gx.O.A1905ContaOcorrenciaAlineaDescricao"],["O1905ContaOcorrenciaAlineaDescricao", "A1905ContaOcorrenciaAlineaDescricao", ["AV35lContaOcorrencias","Acontaocorrenciaalineadescricao"], ["AV35lContaOcorrencias","Acontaocorrenciaalineaid"]]);
      return true;
   }
   this.Valid_Contaocorrenciaalineadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIAALINEADESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaocorrenciatpcobid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIATPCOBID");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A1907ContaOcorrenciaTpCobId) )
            {
               this.A1906ContaOcorrenciaTpCobEmpId =  this.AV20ContaOcorrenciaTpCobEmpId  ;
            }
         }
         catch(e){}
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}
         if ( gx.num.val( gx.text.trim( this.AV24ValorParametro)) != this.A1902ContaOcorrenciaOcoId && ! (0==this.A1907ContaOcorrenciaTpCobId) )
         {
            try {
               gxballoon.setError("Não informe Tipo de Cobrança Anterior.");
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
   this.Valid_Contaocorrenciatpcobdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIATPCOBDESCRICAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contaocorrenciatpcobempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Contaocorrenciatpcobempid",["gx.O.Gx_mode", "gx.O.O1906ContaOcorrenciaTpCobEmpId", "gx.O.A1906ContaOcorrenciaTpCobEmpId", "gx.O.A1907ContaOcorrenciaTpCobId", "gx.O.A1908ContaOcorrenciaTpCobDescricao"],["O1908ContaOcorrenciaTpCobDescricao", "A1908ContaOcorrenciaTpCobDescricao", ["AV35lContaOcorrencias","Acontaocorrenciatpcobempid"]]);
      return true;
   }
   this.Valid_Contaocorrenciaobservacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIAOBSERVACAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e123k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133k2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143k191_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153k191_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,36,37,40,42,43,46,48,49,50,53,55,58,61,63,65,74,75,77,79,80,81];
   this.GXLastCtrlId =81;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECNUMERO",gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciasequencia,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIASEQUENCIA",gxz:"Z1909ContaOcorrenciaSequencia",gxold:"O1909ContaOcorrenciaSequencia",gxvar:"A1909ContaOcorrenciaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1909ContaOcorrenciaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1909ContaOcorrenciaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIASEQUENCIA",gx.O.A1909ContaOcorrenciaSequencia,0)},c2v:function(){gx.O.A1909ContaOcorrenciaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAOCORRENCIASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciadata,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIADATA",gxz:"Z1910ContaOcorrenciaData",gxold:"O1910ContaOcorrenciaData",gxvar:"A1910ContaOcorrenciaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1910ContaOcorrenciaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1910ContaOcorrenciaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIADATA",gx.O.A1910ContaOcorrenciaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1910ContaOcorrenciaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIADATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciahora,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAHORA",gxz:"Z1911ContaOcorrenciaHora",gxold:"O1911ContaOcorrenciaHora",gxvar:"A1911ContaOcorrenciaHora",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1911ContaOcorrenciaHora=Value},v2z:function(Value){gx.O.Z1911ContaOcorrenciaHora=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAHORA",gx.O.A1911ContaOcorrenciaHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1911ContaOcorrenciaHora=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciaocoid,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAOCOID",gxz:"Z1902ContaOcorrenciaOcoId",gxold:"O1902ContaOcorrenciaOcoId",gxvar:"A1902ContaOcorrenciaOcoId",ucs:[],op:[35,37],ip:[37,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1902ContaOcorrenciaOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1902ContaOcorrenciaOcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAOCOID",gx.O.A1902ContaOcorrenciaOcoId,0)},c2v:function(){gx.O.A1902ContaOcorrenciaOcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAOCORRENCIAOCOID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciaocodescricao,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAOCODESCRICAO",gxz:"Z1903ContaOcorrenciaOcoDescricao",gxold:"O1903ContaOcorrenciaOcoDescricao",gxvar:"A1903ContaOcorrenciaOcoDescricao",ucs:[],op:[],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1903ContaOcorrenciaOcoDescricao=Value},v2z:function(Value){gx.O.Z1903ContaOcorrenciaOcoDescricao=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAOCODESCRICAO",gx.O.A1903ContaOcorrenciaOcoDescricao,0)},c2v:function(){gx.O.A1903ContaOcorrenciaOcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIAOCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciaocoempid,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAOCOEMPID",gxz:"Z1901ContaOcorrenciaOcoEmpId",gxold:"O1901ContaOcorrenciaOcoEmpId",gxvar:"A1901ContaOcorrenciaOcoEmpId",ucs:[],op:[36],ip:[36,35,37],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1901ContaOcorrenciaOcoEmpId=Value},v2z:function(Value){gx.O.Z1901ContaOcorrenciaOcoEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAOCOEMPID",gx.O.A1901ContaOcorrenciaOcoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1901ContaOcorrenciaOcoEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIAOCOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciaalineaid,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAALINEAID",gxz:"Z1904ContaOcorrenciaAlineaId",gxold:"O1904ContaOcorrenciaAlineaId",gxvar:"A1904ContaOcorrenciaAlineaId",ucs:[],op:[43],ip:[43,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1904ContaOcorrenciaAlineaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1904ContaOcorrenciaAlineaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAALINEAID",gx.O.A1904ContaOcorrenciaAlineaId,0)},c2v:function(){gx.O.A1904ContaOcorrenciaAlineaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAOCORRENCIAALINEAID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciaalineadescricao,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAALINEADESCRICAO",gxz:"Z1905ContaOcorrenciaAlineaDescricao",gxold:"O1905ContaOcorrenciaAlineaDescricao",gxvar:"A1905ContaOcorrenciaAlineaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1905ContaOcorrenciaAlineaDescricao=Value},v2z:function(Value){gx.O.Z1905ContaOcorrenciaAlineaDescricao=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAALINEADESCRICAO",gx.O.A1905ContaOcorrenciaAlineaDescricao,0)},c2v:function(){gx.O.A1905ContaOcorrenciaAlineaDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIAALINEADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciatpcobid,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIATPCOBID",gxz:"Z1907ContaOcorrenciaTpCobId",gxold:"O1907ContaOcorrenciaTpCobId",gxvar:"A1907ContaOcorrenciaTpCobId",ucs:[],op:[48,35,50],ip:[50,35,48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1907ContaOcorrenciaTpCobId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1907ContaOcorrenciaTpCobId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIATPCOBID",gx.O.A1907ContaOcorrenciaTpCobId,0)},c2v:function(){gx.O.A1907ContaOcorrenciaTpCobId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAOCORRENCIATPCOBID",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciatpcobdescricao,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIATPCOBDESCRICAO",gxz:"Z1908ContaOcorrenciaTpCobDescricao",gxold:"O1908ContaOcorrenciaTpCobDescricao",gxvar:"A1908ContaOcorrenciaTpCobDescricao",ucs:[],op:[],ip:[49],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1908ContaOcorrenciaTpCobDescricao=Value},v2z:function(Value){gx.O.Z1908ContaOcorrenciaTpCobDescricao=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIATPCOBDESCRICAO",gx.O.A1908ContaOcorrenciaTpCobDescricao,0)},c2v:function(){gx.O.A1908ContaOcorrenciaTpCobDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIATPCOBDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciatpcobempid,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIATPCOBEMPID",gxz:"Z1906ContaOcorrenciaTpCobEmpId",gxold:"O1906ContaOcorrenciaTpCobEmpId",gxvar:"A1906ContaOcorrenciaTpCobEmpId",ucs:[],op:[49],ip:[49,48,50],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1906ContaOcorrenciaTpCobEmpId=Value},v2z:function(Value){gx.O.Z1906ContaOcorrenciaTpCobEmpId=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIATPCOBEMPID",gx.O.A1906ContaOcorrenciaTpCobEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1906ContaOcorrenciaTpCobEmpId=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIATPCOBEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"vchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Contaocorrenciaobservacao,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAOBSERVACAO",gxz:"Z1912ContaOcorrenciaObservacao",gxold:"O1912ContaOcorrenciaObservacao",gxvar:"A1912ContaOcorrenciaObservacao",ucs:[],op:[],ip:[55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1912ContaOcorrenciaObservacao=Value},v2z:function(Value){gx.O.Z1912ContaOcorrenciaObservacao=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAOBSERVACAO",gx.O.A1912ContaOcorrenciaObservacao,0)},c2v:function(){gx.O.A1912ContaOcorrenciaObservacao=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAUSUARIOALT",gxz:"Z1913ContaOcorrenciaUsuarioAlt",gxold:"O1913ContaOcorrenciaUsuarioAlt",gxvar:"A1913ContaOcorrenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1913ContaOcorrenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1913ContaOcorrenciaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIAUSUARIOALT",gx.O.A1913ContaOcorrenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1913ContaOcorrenciaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CONTAOCORRENCIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIADATAHORAALT",gxz:"Z1914ContaOcorrenciaDataHoraAlt",gxold:"O1914ContaOcorrenciaDataHoraAlt",gxvar:"A1914ContaOcorrenciaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1914ContaOcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1914ContaOcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CONTAOCORRENCIADATAHORAALT",gx.O.A1914ContaOcorrenciaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1914ContaOcorrenciaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CONTAOCORRENCIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[74]={fld:"JS", format:2,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV34AcessoSistemaSequencia",gxold:"OV34AcessoSistemaSequencia",gxvar:"AV34AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV34AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"BTNHELP",grid:0};
   GXValidFnc[79]={fld:"PROMPT_1902",grid:191};
   GXValidFnc[80]={fld:"PROMPT_1904",grid:191};
   GXValidFnc[81]={fld:"PROMPT_1907",grid:191};
   this.A1686ContaPagRecNumero = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.A1909ContaOcorrenciaSequencia = 0 ;
   this.Z1909ContaOcorrenciaSequencia = 0 ;
   this.O1909ContaOcorrenciaSequencia = 0 ;
   this.A1910ContaOcorrenciaData = gx.date.nullDate() ;
   this.Z1910ContaOcorrenciaData = gx.date.nullDate() ;
   this.O1910ContaOcorrenciaData = gx.date.nullDate() ;
   this.A1911ContaOcorrenciaHora = "" ;
   this.Z1911ContaOcorrenciaHora = "" ;
   this.O1911ContaOcorrenciaHora = "" ;
   this.A1902ContaOcorrenciaOcoId = 0 ;
   this.Z1902ContaOcorrenciaOcoId = 0 ;
   this.O1902ContaOcorrenciaOcoId = 0 ;
   this.A1903ContaOcorrenciaOcoDescricao = "" ;
   this.Z1903ContaOcorrenciaOcoDescricao = "" ;
   this.O1903ContaOcorrenciaOcoDescricao = "" ;
   this.A1901ContaOcorrenciaOcoEmpId = "" ;
   this.Z1901ContaOcorrenciaOcoEmpId = "" ;
   this.O1901ContaOcorrenciaOcoEmpId = "" ;
   this.A1904ContaOcorrenciaAlineaId = 0 ;
   this.Z1904ContaOcorrenciaAlineaId = 0 ;
   this.O1904ContaOcorrenciaAlineaId = 0 ;
   this.A1905ContaOcorrenciaAlineaDescricao = "" ;
   this.Z1905ContaOcorrenciaAlineaDescricao = "" ;
   this.O1905ContaOcorrenciaAlineaDescricao = "" ;
   this.A1907ContaOcorrenciaTpCobId = 0 ;
   this.Z1907ContaOcorrenciaTpCobId = 0 ;
   this.O1907ContaOcorrenciaTpCobId = 0 ;
   this.A1908ContaOcorrenciaTpCobDescricao = "" ;
   this.Z1908ContaOcorrenciaTpCobDescricao = "" ;
   this.O1908ContaOcorrenciaTpCobDescricao = "" ;
   this.A1906ContaOcorrenciaTpCobEmpId = "" ;
   this.Z1906ContaOcorrenciaTpCobEmpId = "" ;
   this.O1906ContaOcorrenciaTpCobEmpId = "" ;
   this.A1912ContaOcorrenciaObservacao = "" ;
   this.Z1912ContaOcorrenciaObservacao = "" ;
   this.O1912ContaOcorrenciaObservacao = "" ;
   this.A1913ContaOcorrenciaUsuarioAlt = "" ;
   this.Z1913ContaOcorrenciaUsuarioAlt = "" ;
   this.O1913ContaOcorrenciaUsuarioAlt = "" ;
   this.A1914ContaOcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.Z1914ContaOcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.O1914ContaOcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.ZV34AcessoSistemaSequencia = 0 ;
   this.OV34AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV41Pgmname = "" ;
   this.AV42Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20ContaOcorrenciaTpCobEmpId = "" ;
   this.AV19ContaOcorrenciaOcoEmpId = "" ;
   this.AV21SnAlterou = "" ;
   this.AV17ContaPagRecNumero = 0 ;
   this.AV26ClienteId = 0 ;
   this.AV27Fantasia = "" ;
   this.AV28TpPagRec = "" ;
   this.AV30StConta = "" ;
   this.AV18ContaOcorrenciaSequencia = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1909ContaOcorrenciaSequencia = 0 ;
   this.AV31Hora = 0 ;
   this.AV32Minu = 0 ;
   this.A1901ContaOcorrenciaOcoEmpId = "" ;
   this.A1906ContaOcorrenciaTpCobEmpId = "" ;
   this.AV24ValorParametro = "" ;
   this.A1913ContaOcorrenciaUsuarioAlt = "" ;
   this.A1914ContaOcorrenciaDataHoraAlt = gx.date.nullDate() ;
   this.AV36LogContaPagRecEmpresaId = "" ;
   this.AV37LogContaPagRecNumero = 0 ;
   this.AV38LogContaOcorrenciaSequencia = 0 ;
   this.Gx_BScreen = 0 ;
   this.A1910ContaOcorrenciaData = gx.date.nullDate() ;
   this.A1911ContaOcorrenciaHora = "" ;
   this.A1902ContaOcorrenciaOcoId = 0 ;
   this.A1903ContaOcorrenciaOcoDescricao = "" ;
   this.A1904ContaOcorrenciaAlineaId = 0 ;
   this.A1905ContaOcorrenciaAlineaDescricao = "" ;
   this.A1912ContaOcorrenciaObservacao = "" ;
   this.A1907ContaOcorrenciaTpCobId = 0 ;
   this.A1908ContaOcorrenciaTpCobDescricao = "" ;
   this.AV33ContaOcorrenciaHora = "" ;
   this.AV35lContaOcorrencias = {} ;
   this.AV39LogUsuario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e123k2_client": ["'FECHAR'", true] ,"e133k2_client": ["AFTER TRN", true] ,"e143k191_client": ["ENTER", true] ,"e153k191_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV26ClienteId',fld:'vCLIENTEID'},{av:'AV27Fantasia',fld:'vFANTASIA'},{av:'AV28TpPagRec',fld:'vTPPAGREC'},{av:'AV30StConta',fld:'vSTCONTA'},{av:'AV18ContaOcorrenciaSequencia',fld:'vCONTAOCORRENCIASEQUENCIA'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV17ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV26ClienteId',fld:'vCLIENTEID'},{av:'AV27Fantasia',fld:'vFANTASIA'},{av:'AV28TpPagRec',fld:'vTPPAGREC'},{av:'AV30StConta',fld:'vSTCONTA'}],[{av:'AV30StConta',fld:'vSTCONTA'},{av:'AV28TpPagRec',fld:'vTPPAGREC'},{av:'AV27Fantasia',fld:'vFANTASIA'},{av:'AV26ClienteId',fld:'vCLIENTEID'},{av:'AV17ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1902", [35]);
   this.setPrompt("PROMPT_1904", [42]);
   this.setPrompt("PROMPT_1907", [48]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17ContaPagRecNumero", "vCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV18ContaOcorrenciaSequencia", "vCONTAOCORRENCIASEQUENCIA", 0, "int");
   this.setVCMap("AV31Hora", "vHORA", 0, "int");
   this.setVCMap("AV32Minu", "vMINU", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV19ContaOcorrenciaOcoEmpId", "vCONTAOCORRENCIAOCOEMPID", 0, "char");
   this.setVCMap("AV20ContaOcorrenciaTpCobEmpId", "vCONTAOCORRENCIATPCOBEMPID", 0, "char");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV36LogContaPagRecEmpresaId", "vLOGCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV37LogContaPagRecNumero", "vLOGCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV38LogContaOcorrenciaSequencia", "vLOGCONTAOCORRENCIASEQUENCIA", 0, "int");
   this.setVCMap("AV33ContaOcorrenciaHora", "vCONTAOCORRENCIAHORA", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV24ValorParametro", "vVALORPARAMETRO", 0, "svchar");
   this.setVCMap("AV35lContaOcorrencias", "vLCONTAOCORRENCIAS", 0, "lContaOcorrencias");
   this.setVCMap("AV39LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV42Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV26ClienteId", "vCLIENTEID", 0, "int");
   this.setVCMap("AV27Fantasia", "vFANTASIA", 0, "svchar");
   this.setVCMap("AV28TpPagRec", "vTPPAGREC", 0, "char");
   this.setVCMap("AV30StConta", "vSTCONTA", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 191 ]= ["O1907ContaOcorrenciaTpCobId","O1908ContaOcorrenciaTpCobDescricao","O1906ContaOcorrenciaTpCobEmpId","O1912ContaOcorrenciaObservacao","O1904ContaOcorrenciaAlineaId","O1905ContaOcorrenciaAlineaDescricao","O1902ContaOcorrenciaOcoId","O1903ContaOcorrenciaOcoDescricao","O1901ContaOcorrenciaOcoEmpId","O1911ContaOcorrenciaHora","O1910ContaOcorrenciaData"] ;
});
gx.setParentObj(new tcontaocorrencia());
