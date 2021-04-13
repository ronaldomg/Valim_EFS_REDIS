/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:32.53
*/
gx.evt.autoSkip = false;
gx.define('testatisticaccustoconta', false, function () {
   this.ServerClass =  "testatisticaccustoconta" ;
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
   this.Valid_Estatisticaccustocontausuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESTATISTICACCUSTOCONTAUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Estatisticaccustocontaempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESTATISTICACCUSTOCONTAEMPRESA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Estatisticaccustocontanumero=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Estatisticaccustocontanumero",["gx.O.A10362EstatisticaCCustoContaUsuario", "gx.O.A10363EstatisticaCCustoContaEmpresa", "gx.O.A10364EstatisticaCCustoContaNumero", "gx.O.A10371EstatisticaCCustoContaFilialId", "gx.O.A10372EstatisticaCCustoContaFilialNo", "gx.num.urlDecimal(gx.O.A10365EstatisticaCCustoContaValorInc,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10366EstatisticaCCustoContaValorAcr,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10367EstatisticaCCustoContaValorDes,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10368EstatisticaCCustoContaValorBai,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10369EstatisticaCCustoContaValorCon,\'.\',\',\')", "gx.O.A10370EstatisticaCCustoContaPagRec"],["A10371EstatisticaCCustoContaFilialId", "A10372EstatisticaCCustoContaFilialNo", "A10365EstatisticaCCustoContaValorInc", "A10366EstatisticaCCustoContaValorAcr", "A10367EstatisticaCCustoContaValorDes", "A10368EstatisticaCCustoContaValorBai", "A10369EstatisticaCCustoContaValorCon", "A10370EstatisticaCCustoContaPagRec", "Gx_mode", "Z10362EstatisticaCCustoContaUsuario", "Z10363EstatisticaCCustoContaEmpresa", "Z10364EstatisticaCCustoContaNumero", "Z10371EstatisticaCCustoContaFilialId", "Z10372EstatisticaCCustoContaFilialNo", "Z10365EstatisticaCCustoContaValorInc", "Z10366EstatisticaCCustoContaValorAcr", "Z10367EstatisticaCCustoContaValorDes", "Z10368EstatisticaCCustoContaValorBai", "Z10369EstatisticaCCustoContaValorCon", "Z10370EstatisticaCCustoContaPagRec", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11f2773_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12f2773_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89];
   this.GXLastCtrlId =89;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAUSUARIO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatisticaccustocontausuario,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAUSUARIO",gxz:"Z10362EstatisticaCCustoContaUsuario",gxold:"O10362EstatisticaCCustoContaUsuario",gxvar:"A10362EstatisticaCCustoContaUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10362EstatisticaCCustoContaUsuario=Value},v2z:function(Value){gx.O.Z10362EstatisticaCCustoContaUsuario=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACCUSTOCONTAUSUARIO",gx.O.A10362EstatisticaCCustoContaUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10362EstatisticaCCustoContaUsuario=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACCUSTOCONTAUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAEMPRESA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatisticaccustocontaempresa,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAEMPRESA",gxz:"Z10363EstatisticaCCustoContaEmpresa",gxold:"O10363EstatisticaCCustoContaEmpresa",gxvar:"A10363EstatisticaCCustoContaEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10363EstatisticaCCustoContaEmpresa=Value},v2z:function(Value){gx.O.Z10363EstatisticaCCustoContaEmpresa=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACCUSTOCONTAEMPRESA",gx.O.A10363EstatisticaCCustoContaEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10363EstatisticaCCustoContaEmpresa=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACCUSTOCONTAEMPRESA")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTANUMERO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Estatisticaccustocontanumero,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTANUMERO",gxz:"Z10364EstatisticaCCustoContaNumero",gxold:"O10364EstatisticaCCustoContaNumero",gxvar:"A10364EstatisticaCCustoContaNumero",ucs:[],op:[89,84,79,74,69,64,59,54],ip:[89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10364EstatisticaCCustoContaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10364EstatisticaCCustoContaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESTATISTICACCUSTOCONTANUMERO",gx.O.A10364EstatisticaCCustoContaNumero,0)},c2v:function(){gx.O.A10364EstatisticaCCustoContaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTATISTICACCUSTOCONTANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAFILIALID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAFILIALID",gxz:"Z10371EstatisticaCCustoContaFilialId",gxold:"O10371EstatisticaCCustoContaFilialId",gxvar:"A10371EstatisticaCCustoContaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10371EstatisticaCCustoContaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10371EstatisticaCCustoContaFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESTATISTICACCUSTOCONTAFILIALID",gx.O.A10371EstatisticaCCustoContaFilialId,0)},c2v:function(){gx.O.A10371EstatisticaCCustoContaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESTATISTICACCUSTOCONTAFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAFILIALNOME", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAFILIALNO",gxz:"Z10372EstatisticaCCustoContaFilialNo",gxold:"O10372EstatisticaCCustoContaFilialNo",gxvar:"A10372EstatisticaCCustoContaFilialNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10372EstatisticaCCustoContaFilialNo=Value},v2z:function(Value){gx.O.Z10372EstatisticaCCustoContaFilialNo=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACCUSTOCONTAFILIALNO",gx.O.A10372EstatisticaCCustoContaFilialNo,0)},c2v:function(){gx.O.A10372EstatisticaCCustoContaFilialNo=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACCUSTOCONTAFILIALNO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAVALORINCLUSAO", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAVALORINC",gxz:"Z10365EstatisticaCCustoContaValorInc",gxold:"O10365EstatisticaCCustoContaValorInc",gxvar:"A10365EstatisticaCCustoContaValorInc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10365EstatisticaCCustoContaValorInc=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10365EstatisticaCCustoContaValorInc=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ESTATISTICACCUSTOCONTAVALORINC",gx.O.A10365EstatisticaCCustoContaValorInc,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10365EstatisticaCCustoContaValorInc=this.val()},val:function(){return gx.fn.getDecimalValue("ESTATISTICACCUSTOCONTAVALORINC",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAVALORACRESCIMO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAVALORACR",gxz:"Z10366EstatisticaCCustoContaValorAcr",gxold:"O10366EstatisticaCCustoContaValorAcr",gxvar:"A10366EstatisticaCCustoContaValorAcr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10366EstatisticaCCustoContaValorAcr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10366EstatisticaCCustoContaValorAcr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ESTATISTICACCUSTOCONTAVALORACR",gx.O.A10366EstatisticaCCustoContaValorAcr,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10366EstatisticaCCustoContaValorAcr=this.val()},val:function(){return gx.fn.getDecimalValue("ESTATISTICACCUSTOCONTAVALORACR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAVALORDESCONTO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAVALORDES",gxz:"Z10367EstatisticaCCustoContaValorDes",gxold:"O10367EstatisticaCCustoContaValorDes",gxvar:"A10367EstatisticaCCustoContaValorDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10367EstatisticaCCustoContaValorDes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10367EstatisticaCCustoContaValorDes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ESTATISTICACCUSTOCONTAVALORDES",gx.O.A10367EstatisticaCCustoContaValorDes,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10367EstatisticaCCustoContaValorDes=this.val()},val:function(){return gx.fn.getDecimalValue("ESTATISTICACCUSTOCONTAVALORDES",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAVALORBAIXA", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAVALORBAI",gxz:"Z10368EstatisticaCCustoContaValorBai",gxold:"O10368EstatisticaCCustoContaValorBai",gxvar:"A10368EstatisticaCCustoContaValorBai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10368EstatisticaCCustoContaValorBai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10368EstatisticaCCustoContaValorBai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ESTATISTICACCUSTOCONTAVALORBAI",gx.O.A10368EstatisticaCCustoContaValorBai,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10368EstatisticaCCustoContaValorBai=this.val()},val:function(){return gx.fn.getDecimalValue("ESTATISTICACCUSTOCONTAVALORBAI",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[82]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAVALORCONTA", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAVALORCON",gxz:"Z10369EstatisticaCCustoContaValorCon",gxold:"O10369EstatisticaCCustoContaValorCon",gxvar:"A10369EstatisticaCCustoContaValorCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10369EstatisticaCCustoContaValorCon=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10369EstatisticaCCustoContaValorCon=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ESTATISTICACCUSTOCONTAVALORCON",gx.O.A10369EstatisticaCCustoContaValorCon,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10369EstatisticaCCustoContaValorCon=this.val()},val:function(){return gx.fn.getDecimalValue("ESTATISTICACCUSTOCONTAVALORCON",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[87]={fld:"TEXTBLOCKESTATISTICACCUSTOCONTAPAGREC", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESTATISTICACCUSTOCONTAPAGREC",gxz:"Z10370EstatisticaCCustoContaPagRec",gxold:"O10370EstatisticaCCustoContaPagRec",gxvar:"A10370EstatisticaCCustoContaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10370EstatisticaCCustoContaPagRec=Value},v2z:function(Value){gx.O.Z10370EstatisticaCCustoContaPagRec=Value},v2c:function(){gx.fn.setControlValue("ESTATISTICACCUSTOCONTAPAGREC",gx.O.A10370EstatisticaCCustoContaPagRec,0)},c2v:function(){gx.O.A10370EstatisticaCCustoContaPagRec=this.val()},val:function(){return gx.fn.getControlValue("ESTATISTICACCUSTOCONTAPAGREC")},nac:gx.falseFn};
   this.A10362EstatisticaCCustoContaUsuario = "" ;
   this.Z10362EstatisticaCCustoContaUsuario = "" ;
   this.O10362EstatisticaCCustoContaUsuario = "" ;
   this.A10363EstatisticaCCustoContaEmpresa = "" ;
   this.Z10363EstatisticaCCustoContaEmpresa = "" ;
   this.O10363EstatisticaCCustoContaEmpresa = "" ;
   this.A10364EstatisticaCCustoContaNumero = 0 ;
   this.Z10364EstatisticaCCustoContaNumero = 0 ;
   this.O10364EstatisticaCCustoContaNumero = 0 ;
   this.A10371EstatisticaCCustoContaFilialId = 0 ;
   this.Z10371EstatisticaCCustoContaFilialId = 0 ;
   this.O10371EstatisticaCCustoContaFilialId = 0 ;
   this.A10372EstatisticaCCustoContaFilialNo = "" ;
   this.Z10372EstatisticaCCustoContaFilialNo = "" ;
   this.O10372EstatisticaCCustoContaFilialNo = "" ;
   this.A10365EstatisticaCCustoContaValorInc = 0 ;
   this.Z10365EstatisticaCCustoContaValorInc = 0 ;
   this.O10365EstatisticaCCustoContaValorInc = 0 ;
   this.A10366EstatisticaCCustoContaValorAcr = 0 ;
   this.Z10366EstatisticaCCustoContaValorAcr = 0 ;
   this.O10366EstatisticaCCustoContaValorAcr = 0 ;
   this.A10367EstatisticaCCustoContaValorDes = 0 ;
   this.Z10367EstatisticaCCustoContaValorDes = 0 ;
   this.O10367EstatisticaCCustoContaValorDes = 0 ;
   this.A10368EstatisticaCCustoContaValorBai = 0 ;
   this.Z10368EstatisticaCCustoContaValorBai = 0 ;
   this.O10368EstatisticaCCustoContaValorBai = 0 ;
   this.A10369EstatisticaCCustoContaValorCon = 0 ;
   this.Z10369EstatisticaCCustoContaValorCon = 0 ;
   this.O10369EstatisticaCCustoContaValorCon = 0 ;
   this.A10370EstatisticaCCustoContaPagRec = "" ;
   this.Z10370EstatisticaCCustoContaPagRec = "" ;
   this.O10370EstatisticaCCustoContaPagRec = "" ;
   this.A10362EstatisticaCCustoContaUsuario = "" ;
   this.A10363EstatisticaCCustoContaEmpresa = "" ;
   this.A10364EstatisticaCCustoContaNumero = 0 ;
   this.A10371EstatisticaCCustoContaFilialId = 0 ;
   this.A10372EstatisticaCCustoContaFilialNo = "" ;
   this.A10365EstatisticaCCustoContaValorInc = 0 ;
   this.A10366EstatisticaCCustoContaValorAcr = 0 ;
   this.A10367EstatisticaCCustoContaValorDes = 0 ;
   this.A10368EstatisticaCCustoContaValorBai = 0 ;
   this.A10369EstatisticaCCustoContaValorCon = 0 ;
   this.A10370EstatisticaCCustoContaPagRec = "" ;
   this.Events = {"e11f2773_client": ["ENTER", true] ,"e12f2773_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new testatisticaccustoconta());
