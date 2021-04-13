/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:37.69
*/
gx.evt.autoSkip = false;
gx.define('tsaidaitemcomplemento', false, function () {
   this.ServerClass =  "tsaidaitemcomplemento" ;
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
      this.A6785SaidaItemValorTotal=gx.fn.getDecimalValue("SAIDAITEMVALORTOTAL",'.',',') ;
      this.A6167SaidaItemValorDesconto=gx.fn.getDecimalValue("SAIDAITEMVALORDESCONTO",'.',',') ;
      this.A6194SaidaItemValorICMSST=gx.fn.getDecimalValue("SAIDAITEMVALORICMSST",'.',',') ;
      this.A6169SaidaItemValorSeguro=gx.fn.getDecimalValue("SAIDAITEMVALORSEGURO",'.',',') ;
      this.A6170SaidaItemOutrasDespesas=gx.fn.getDecimalValue("SAIDAITEMOUTRASDESPESAS",'.',',') ;
      this.A6204SaidaItemValorIPI=gx.fn.getDecimalValue("SAIDAITEMVALORIPI",'.',',') ;
      this.A6168SaidaItemValorFrete=gx.fn.getDecimalValue("SAIDAITEMVALORFRETE",'.',',') ;
      this.A6092SaidaFreteEntraTotal=gx.fn.getControlValue("SAIDAFRETEENTRATOTAL") ;
      this.A10683SaidaItemValorFCPST=gx.fn.getDecimalValue("SAIDAITEMVALORFCPST",'.',',') ;
      this.A10676SaidaItemValorICMSDesonerado=gx.fn.getDecimalValue("SAIDAITEMVALORICMSDESONERADO",'.',',') ;
      this.A4308SaidaTipo=gx.fn.getControlValue("SAIDATIPO") ;
      this.A6165SaidaItemQuantidade=gx.fn.getDecimalValue("SAIDAITEMQUANTIDADE",'.',',') ;
      this.A6166SaidaItemValorUnitario=gx.fn.getDecimalValue("SAIDAITEMVALORUNITARIO",'.',',') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Saidaitemcomplementoempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMCOMPLEMENTOEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitemcomplementoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitemcomplementoid",["gx.O.A11193SaidaItemComplementoEmpId", "gx.O.A11194SaidaItemComplementoId", "gx.O.A6092SaidaFreteEntraTotal"],["A6092SaidaFreteEntraTotal"]);
      return true;
   }
   this.Valid_Saidaitemcomplementoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitemcomplementoseq",["gx.O.A11193SaidaItemComplementoEmpId", "gx.O.A11194SaidaItemComplementoId", "gx.O.A11195SaidaItemComplementoSeq", "gx.O.A11196SaidaItemComplementoProposta", "gx.O.A11197SaidaItemComplementoEscopo", "gx.O.A11201SaidaItemComplementoValidade", "gx.O.A11202SaidaItemComplementoEntrega", "gx.O.A11198SaidaItemComplementoFPgtoEmp", "gx.O.A11199SaidaItemComplementoFPgtoId", "gx.O.A11203SaidaItemComplementoObs", "gx.num.urlDecimal(gx.O.A6167SaidaItemValorDesconto,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6194SaidaItemValorICMSST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6169SaidaItemValorSeguro,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6170SaidaItemOutrasDespesas,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6204SaidaItemValorIPI,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A6168SaidaItemValorFrete,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10683SaidaItemValorFCPST,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10676SaidaItemValorICMSDesonerado,\'.\',\',\')"],["A11196SaidaItemComplementoProposta", "A11197SaidaItemComplementoEscopo", "A11198SaidaItemComplementoFPgtoEmp", "A11199SaidaItemComplementoFPgtoId", "A11201SaidaItemComplementoValidade", "A11202SaidaItemComplementoEntrega", "A11204SaidaItemComplementoValorTotal", "A6785SaidaItemValorTotal", "A6092SaidaFreteEntraTotal", "A11203SaidaItemComplementoObs", "A6167SaidaItemValorDesconto", "A6194SaidaItemValorICMSST", "A6169SaidaItemValorSeguro", "A6170SaidaItemOutrasDespesas", "A6204SaidaItemValorIPI", "A6168SaidaItemValorFrete", "A10683SaidaItemValorFCPST", "A10676SaidaItemValorICMSDesonerado", "A11200SaidaItemComplementoFPgtoDesc", "Gx_mode", "Z11193SaidaItemComplementoEmpId", "Z11194SaidaItemComplementoId", "Z11195SaidaItemComplementoSeq", "Z11196SaidaItemComplementoProposta", "Z11197SaidaItemComplementoEscopo", "Z11198SaidaItemComplementoFPgtoEmp", "Z11199SaidaItemComplementoFPgtoId", "Z11201SaidaItemComplementoValidade", "Z11202SaidaItemComplementoEntrega", "Z11204SaidaItemComplementoValorTotal", "Z6785SaidaItemValorTotal", "Z6092SaidaFreteEntraTotal", "Z11203SaidaItemComplementoObs", "Z6167SaidaItemValorDesconto", "Z6194SaidaItemValorICMSST", "Z6169SaidaItemValorSeguro", "Z6170SaidaItemOutrasDespesas", "Z6204SaidaItemValorIPI", "Z6168SaidaItemValorFrete", "Z10683SaidaItemValorFCPST", "Z10676SaidaItemValorICMSDesonerado", "Z11200SaidaItemComplementoFPgtoDesc", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Saidaitemcomplementofpgtoemp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAITEMCOMPLEMENTOFPGTOEMP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaitemcomplementofpgtoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaitemcomplementofpgtoid",["gx.O.A11198SaidaItemComplementoFPgtoEmp", "gx.O.A11199SaidaItemComplementoFPgtoId", "gx.O.A11200SaidaItemComplementoFPgtoDesc"],["A11200SaidaItemComplementoFPgtoDesc"]);
      return true;
   }
   this.e11g5822_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12g5822_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,100,101,102];
   this.GXLastCtrlId =102;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemcomplementoempid,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOEMPID",gxz:"Z11193SaidaItemComplementoEmpId",gxold:"O11193SaidaItemComplementoEmpId",gxvar:"A11193SaidaItemComplementoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11193SaidaItemComplementoEmpId=Value},v2z:function(Value){gx.O.Z11193SaidaItemComplementoEmpId=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOEMPID",gx.O.A11193SaidaItemComplementoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11193SaidaItemComplementoEmpId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemcomplementoid,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOID",gxz:"Z11194SaidaItemComplementoId",gxold:"O11194SaidaItemComplementoId",gxvar:"A11194SaidaItemComplementoId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11194SaidaItemComplementoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11194SaidaItemComplementoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOID",gx.O.A11194SaidaItemComplementoId,0)},c2v:function(){gx.O.A11194SaidaItemComplementoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMCOMPLEMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOSEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemcomplementoseq,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOSEQ",gxz:"Z11195SaidaItemComplementoSeq",gxold:"O11195SaidaItemComplementoSeq",gxvar:"A11195SaidaItemComplementoSeq",ucs:[],op:[89,69,64,84,79,59,54],ip:[89,69,64,84,79,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11195SaidaItemComplementoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11195SaidaItemComplementoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOSEQ",gx.O.A11195SaidaItemComplementoSeq,0)},c2v:function(){gx.O.A11195SaidaItemComplementoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMCOMPLEMENTOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOPROPOSTA", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOPROPOSTA",gxz:"Z11196SaidaItemComplementoProposta",gxold:"O11196SaidaItemComplementoProposta",gxvar:"A11196SaidaItemComplementoProposta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11196SaidaItemComplementoProposta=Value},v2z:function(Value){gx.O.Z11196SaidaItemComplementoProposta=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOPROPOSTA",gx.O.A11196SaidaItemComplementoProposta,0)},c2v:function(){gx.O.A11196SaidaItemComplementoProposta=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOPROPOSTA")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOESCOPO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOESCOPO",gxz:"Z11197SaidaItemComplementoEscopo",gxold:"O11197SaidaItemComplementoEscopo",gxvar:"A11197SaidaItemComplementoEscopo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11197SaidaItemComplementoEscopo=Value},v2z:function(Value){gx.O.Z11197SaidaItemComplementoEscopo=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOESCOPO",gx.O.A11197SaidaItemComplementoEscopo,0)},c2v:function(){gx.O.A11197SaidaItemComplementoEscopo=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOESCOPO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOFPGTOEMP", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemcomplementofpgtoemp,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOFPGTOEMP",gxz:"Z11198SaidaItemComplementoFPgtoEmp",gxold:"O11198SaidaItemComplementoFPgtoEmp",gxvar:"A11198SaidaItemComplementoFPgtoEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11198SaidaItemComplementoFPgtoEmp=Value},v2z:function(Value){gx.O.Z11198SaidaItemComplementoFPgtoEmp=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOFPGTOEMP",gx.O.A11198SaidaItemComplementoFPgtoEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11198SaidaItemComplementoFPgtoEmp=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOFPGTOEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOFPGTOID", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaitemcomplementofpgtoid,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOFPGTOID",gxz:"Z11199SaidaItemComplementoFPgtoId",gxold:"O11199SaidaItemComplementoFPgtoId",gxvar:"A11199SaidaItemComplementoFPgtoId",ucs:[],op:[74],ip:[74,69,64],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11199SaidaItemComplementoFPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11199SaidaItemComplementoFPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOFPGTOID",gx.O.A11199SaidaItemComplementoFPgtoId,0)},c2v:function(){gx.O.A11199SaidaItemComplementoFPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAITEMCOMPLEMENTOFPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOFPGTODESC", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOFPGTODESC",gxz:"Z11200SaidaItemComplementoFPgtoDesc",gxold:"O11200SaidaItemComplementoFPgtoDesc",gxvar:"A11200SaidaItemComplementoFPgtoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11200SaidaItemComplementoFPgtoDesc=Value},v2z:function(Value){gx.O.Z11200SaidaItemComplementoFPgtoDesc=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOFPGTODESC",gx.O.A11200SaidaItemComplementoFPgtoDesc,0)},c2v:function(){gx.O.A11200SaidaItemComplementoFPgtoDesc=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOFPGTODESC")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOVALIDADE", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOVALIDADE",gxz:"Z11201SaidaItemComplementoValidade",gxold:"O11201SaidaItemComplementoValidade",gxvar:"A11201SaidaItemComplementoValidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11201SaidaItemComplementoValidade=Value},v2z:function(Value){gx.O.Z11201SaidaItemComplementoValidade=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOVALIDADE",gx.O.A11201SaidaItemComplementoValidade,0)},c2v:function(){gx.O.A11201SaidaItemComplementoValidade=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOVALIDADE")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOENTREGA", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOENTREGA",gxz:"Z11202SaidaItemComplementoEntrega",gxold:"O11202SaidaItemComplementoEntrega",gxvar:"A11202SaidaItemComplementoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11202SaidaItemComplementoEntrega=Value},v2z:function(Value){gx.O.Z11202SaidaItemComplementoEntrega=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOENTREGA",gx.O.A11202SaidaItemComplementoEntrega,0)},c2v:function(){gx.O.A11202SaidaItemComplementoEntrega=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOENTREGA")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOOBS", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOOBS",gxz:"Z11203SaidaItemComplementoObs",gxold:"O11203SaidaItemComplementoObs",gxvar:"A11203SaidaItemComplementoObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11203SaidaItemComplementoObs=Value},v2z:function(Value){gx.O.Z11203SaidaItemComplementoObs=Value},v2c:function(){gx.fn.setControlValue("SAIDAITEMCOMPLEMENTOOBS",gx.O.A11203SaidaItemComplementoObs,0)},c2v:function(){gx.O.A11203SaidaItemComplementoObs=this.val()},val:function(){return gx.fn.getControlValue("SAIDAITEMCOMPLEMENTOOBS")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKSAIDAITEMCOMPLEMENTOVALORTOTAL", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAITEMCOMPLEMENTOVALORTOTAL",gxz:"Z11204SaidaItemComplementoValorTotal",gxold:"O11204SaidaItemComplementoValorTotal",gxvar:"A11204SaidaItemComplementoValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11204SaidaItemComplementoValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11204SaidaItemComplementoValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDAITEMCOMPLEMENTOVALORTOTAL",gx.O.A11204SaidaItemComplementoValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11204SaidaItemComplementoValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDAITEMCOMPLEMENTOVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[100]={fld:"PROMPT_11193_11194",grid:822};
   GXValidFnc[101]={fld:"PROMPT_11195",grid:822};
   GXValidFnc[102]={fld:"PROMPT_11198_11199",grid:822};
   this.A11193SaidaItemComplementoEmpId = "" ;
   this.Z11193SaidaItemComplementoEmpId = "" ;
   this.O11193SaidaItemComplementoEmpId = "" ;
   this.A11194SaidaItemComplementoId = 0 ;
   this.Z11194SaidaItemComplementoId = 0 ;
   this.O11194SaidaItemComplementoId = 0 ;
   this.A11195SaidaItemComplementoSeq = 0 ;
   this.Z11195SaidaItemComplementoSeq = 0 ;
   this.O11195SaidaItemComplementoSeq = 0 ;
   this.A11196SaidaItemComplementoProposta = "" ;
   this.Z11196SaidaItemComplementoProposta = "" ;
   this.O11196SaidaItemComplementoProposta = "" ;
   this.A11197SaidaItemComplementoEscopo = "" ;
   this.Z11197SaidaItemComplementoEscopo = "" ;
   this.O11197SaidaItemComplementoEscopo = "" ;
   this.A11198SaidaItemComplementoFPgtoEmp = "" ;
   this.Z11198SaidaItemComplementoFPgtoEmp = "" ;
   this.O11198SaidaItemComplementoFPgtoEmp = "" ;
   this.A11199SaidaItemComplementoFPgtoId = 0 ;
   this.Z11199SaidaItemComplementoFPgtoId = 0 ;
   this.O11199SaidaItemComplementoFPgtoId = 0 ;
   this.A11200SaidaItemComplementoFPgtoDesc = "" ;
   this.Z11200SaidaItemComplementoFPgtoDesc = "" ;
   this.O11200SaidaItemComplementoFPgtoDesc = "" ;
   this.A11201SaidaItemComplementoValidade = "" ;
   this.Z11201SaidaItemComplementoValidade = "" ;
   this.O11201SaidaItemComplementoValidade = "" ;
   this.A11202SaidaItemComplementoEntrega = "" ;
   this.Z11202SaidaItemComplementoEntrega = "" ;
   this.O11202SaidaItemComplementoEntrega = "" ;
   this.A11203SaidaItemComplementoObs = "" ;
   this.Z11203SaidaItemComplementoObs = "" ;
   this.O11203SaidaItemComplementoObs = "" ;
   this.A11204SaidaItemComplementoValorTotal = 0 ;
   this.Z11204SaidaItemComplementoValorTotal = 0 ;
   this.O11204SaidaItemComplementoValorTotal = 0 ;
   this.A11193SaidaItemComplementoEmpId = "" ;
   this.A11194SaidaItemComplementoId = 0 ;
   this.A11195SaidaItemComplementoSeq = 0 ;
   this.A11196SaidaItemComplementoProposta = "" ;
   this.A11197SaidaItemComplementoEscopo = "" ;
   this.A11198SaidaItemComplementoFPgtoEmp = "" ;
   this.A11199SaidaItemComplementoFPgtoId = 0 ;
   this.A11200SaidaItemComplementoFPgtoDesc = "" ;
   this.A11201SaidaItemComplementoValidade = "" ;
   this.A11202SaidaItemComplementoEntrega = "" ;
   this.A11203SaidaItemComplementoObs = "" ;
   this.A11204SaidaItemComplementoValorTotal = 0 ;
   this.A6785SaidaItemValorTotal = 0 ;
   this.A6167SaidaItemValorDesconto = 0 ;
   this.A6194SaidaItemValorICMSST = 0 ;
   this.A6169SaidaItemValorSeguro = 0 ;
   this.A6170SaidaItemOutrasDespesas = 0 ;
   this.A6204SaidaItemValorIPI = 0 ;
   this.A6168SaidaItemValorFrete = 0 ;
   this.A6092SaidaFreteEntraTotal = "" ;
   this.A10683SaidaItemValorFCPST = 0 ;
   this.A10676SaidaItemValorICMSDesonerado = 0 ;
   this.Events = {"e11g5822_client": ["ENTER", true] ,"e12g5822_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11193_11194", [39,44]);
   this.setPrompt("PROMPT_11195", [49]);
   this.setPrompt("PROMPT_11198_11199", [64,69]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("A6785SaidaItemValorTotal", "SAIDAITEMVALORTOTAL", 0, "decimal");
   this.setVCMap("A6167SaidaItemValorDesconto", "SAIDAITEMVALORDESCONTO", 0, "decimal");
   this.setVCMap("A6194SaidaItemValorICMSST", "SAIDAITEMVALORICMSST", 0, "decimal");
   this.setVCMap("A6169SaidaItemValorSeguro", "SAIDAITEMVALORSEGURO", 0, "decimal");
   this.setVCMap("A6170SaidaItemOutrasDespesas", "SAIDAITEMOUTRASDESPESAS", 0, "decimal");
   this.setVCMap("A6204SaidaItemValorIPI", "SAIDAITEMVALORIPI", 0, "decimal");
   this.setVCMap("A6168SaidaItemValorFrete", "SAIDAITEMVALORFRETE", 0, "decimal");
   this.setVCMap("A6092SaidaFreteEntraTotal", "SAIDAFRETEENTRATOTAL", 0, "char");
   this.setVCMap("A10683SaidaItemValorFCPST", "SAIDAITEMVALORFCPST", 0, "decimal");
   this.setVCMap("A10676SaidaItemValorICMSDesonerado", "SAIDAITEMVALORICMSDESONERADO", 0, "decimal");
   this.setVCMap("A4308SaidaTipo", "SAIDATIPO", 0, "char");
   this.setVCMap("A6165SaidaItemQuantidade", "SAIDAITEMQUANTIDADE", 0, "decimal");
   this.setVCMap("A6166SaidaItemValorUnitario", "SAIDAITEMVALORUNITARIO", 0, "decimal");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidaitemcomplemento());
