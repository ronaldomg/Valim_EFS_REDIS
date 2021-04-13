/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:9:34.99
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcontasocorrencias', false, function () {
   this.ServerClass =  "hregistrarcontasocorrencias" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV32TpPagRec=gx.fn.getControlValue("vTPPAGREC") ;
      this.AV36Situacao=gx.fn.getControlValue("vSITUACAO") ;
   };
   this.Valid_Contaocorrenciaocoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(58) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAOCORRENCIAOCOID", gx.fn.currentGridRowImpl(58));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ar2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ar2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16ar2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ar2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e14ar2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e15ar2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e19ar2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20ar2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21ar2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22ar2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24ar2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25ar2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25,28,30,32,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,67,68,75];
   this.GXLastCtrlId =75;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarcontasocorrencias",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1910,59,"CONTAOCORRENCIADATA","","","ContaOcorrenciaData","date",0,"px",10,10,"right",null,[],1910,"ContaOcorrenciaData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1911,60,"CONTAOCORRENCIAHORA","","","ContaOcorrenciaHora","char",0,"px",5,5,"left",null,[],1911,"ContaOcorrenciaHora",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1909,61,"CONTAOCORRENCIASEQUENCIA","","","ContaOcorrenciaSequencia","int",0,"px",4,4,"right",null,[],1909,"ContaOcorrenciaSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1902,62,"CONTAOCORRENCIAOCOID","","","ContaOcorrenciaOcoId","int",0,"px",3,3,"right",null,[],1902,"ContaOcorrenciaOcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1903,63,"CONTAOCORRENCIAOCODESCRICAO","Descrição da Ocorrência","","ContaOcorrenciaOcoDescricao","svchar",0,"px",25,25,"left",null,[],1903,"ContaOcorrenciaOcoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1904,64,"CONTAOCORRENCIAALINEAID","Alínea","","ContaOcorrenciaAlineaId","int",0,"px",2,2,"right",null,[],1904,"ContaOcorrenciaAlineaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1908,65,"CONTAOCORRENCIATPCOBDESCRICAO","Cobrança Anterior","","ContaOcorrenciaTpCobDescricao","svchar",0,"px",25,25,"left",null,[],1908,"ContaOcorrenciaTpCobDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",66,0,"px",17,"px","e19ar2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",67,0,"px",17,"px","e20ar2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",68,0,"px",17,"px","e21ar2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE12",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTAPAGRECNUMERO",gxz:"ZV29ContaPagRecNumero",gxold:"OV29ContaPagRecNumero",gxvar:"AV29ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV29ContaPagRecNumero,0)},c2v:function(){gx.O.AV29ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTA",gxz:"ZV34TipoConta",gxold:"OV34TipoConta",gxvar:"AV34TipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TipoConta=Value},v2z:function(Value){gx.O.ZV34TipoConta=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTA",gx.O.AV34TipoConta,0)},c2v:function(){gx.O.AV34TipoConta=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSTCONTA",gxz:"ZV35StConta",gxold:"OV35StConta",gxvar:"AV35StConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35StConta=Value},v2z:function(Value){gx.O.ZV35StConta=Value},v2c:function(){gx.fn.setControlValue("vSTCONTA",gx.O.AV35StConta,0)},c2v:function(){gx.O.AV35StConta=this.val()},val:function(){return gx.fn.getControlValue("vSTCONTA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE7",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEID",gxz:"ZV30ClienteId",gxold:"OV30ClienteId",gxvar:"AV30ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV30ClienteId,0)},c2v:function(){gx.O.AV30ClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFANTASIA",gxz:"ZV31Fantasia",gxold:"OV31Fantasia",gxvar:"AV31Fantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Fantasia=Value},v2z:function(Value){gx.O.ZV31Fantasia=Value},v2c:function(){gx.fn.setControlValue("vFANTASIA",gx.O.AV31Fantasia,0)},c2v:function(){gx.O.AV31Fantasia=this.val()},val:function(){return gx.fn.getControlValue("vFANTASIA")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE6",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIADATA",gxz:"Z1910ContaOcorrenciaData",gxold:"O1910ContaOcorrenciaData",gxvar:"A1910ContaOcorrenciaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1910ContaOcorrenciaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1910ContaOcorrenciaData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAOCORRENCIADATA",row || gx.fn.currentGridRowImpl(58),gx.O.A1910ContaOcorrenciaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1910ContaOcorrenciaData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAOCORRENCIADATA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAHORA",gxz:"Z1911ContaOcorrenciaHora",gxold:"O1911ContaOcorrenciaHora",gxvar:"A1911ContaOcorrenciaHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1911ContaOcorrenciaHora=Value},v2z:function(Value){gx.O.Z1911ContaOcorrenciaHora=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAOCORRENCIAHORA",row || gx.fn.currentGridRowImpl(58),gx.O.A1911ContaOcorrenciaHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1911ContaOcorrenciaHora=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAOCORRENCIAHORA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIASEQUENCIA",gxz:"Z1909ContaOcorrenciaSequencia",gxold:"O1909ContaOcorrenciaSequencia",gxvar:"A1909ContaOcorrenciaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1909ContaOcorrenciaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1909ContaOcorrenciaSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAOCORRENCIASEQUENCIA",row || gx.fn.currentGridRowImpl(58),gx.O.A1909ContaOcorrenciaSequencia,0)},c2v:function(){gx.O.A1909ContaOcorrenciaSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAOCORRENCIASEQUENCIA",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:this.Valid_Contaocorrenciaocoid,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAOCOID",gxz:"Z1902ContaOcorrenciaOcoId",gxold:"O1902ContaOcorrenciaOcoId",gxvar:"A1902ContaOcorrenciaOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1902ContaOcorrenciaOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1902ContaOcorrenciaOcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAOCORRENCIAOCOID",row || gx.fn.currentGridRowImpl(58),gx.O.A1902ContaOcorrenciaOcoId,0)},c2v:function(){gx.O.A1902ContaOcorrenciaOcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAOCORRENCIAOCOID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAOCODESCRICAO",gxz:"Z1903ContaOcorrenciaOcoDescricao",gxold:"O1903ContaOcorrenciaOcoDescricao",gxvar:"A1903ContaOcorrenciaOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1903ContaOcorrenciaOcoDescricao=Value},v2z:function(Value){gx.O.Z1903ContaOcorrenciaOcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAOCORRENCIAOCODESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A1903ContaOcorrenciaOcoDescricao,0)},c2v:function(){gx.O.A1903ContaOcorrenciaOcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAOCORRENCIAOCODESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIAALINEAID",gxz:"Z1904ContaOcorrenciaAlineaId",gxold:"O1904ContaOcorrenciaAlineaId",gxvar:"A1904ContaOcorrenciaAlineaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1904ContaOcorrenciaAlineaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1904ContaOcorrenciaAlineaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAOCORRENCIAALINEAID",row || gx.fn.currentGridRowImpl(58),gx.O.A1904ContaOcorrenciaAlineaId,0)},c2v:function(){gx.O.A1904ContaOcorrenciaAlineaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAOCORRENCIAALINEAID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAOCORRENCIATPCOBDESCRICAO",gxz:"Z1908ContaOcorrenciaTpCobDescricao",gxold:"O1908ContaOcorrenciaTpCobDescricao",gxvar:"A1908ContaOcorrenciaTpCobDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1908ContaOcorrenciaTpCobDescricao=Value},v2z:function(Value){gx.O.Z1908ContaOcorrenciaTpCobDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAOCORRENCIATPCOBDESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A1908ContaOcorrenciaTpCobDescricao,0)},c2v:function(){gx.O.A1908ContaOcorrenciaTpCobDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAOCORRENCIATPCOBDESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV48Bmpalt_GXI)},c2v:function(){gx.O.AV48Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV48Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV49Bmpexc_GXI)},c2v:function(){gx.O.AV49Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV49Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV50Bmpcon_GXI)},c2v:function(){gx.O.AV50Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV50Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV29ContaPagRecNumero = 0 ;
   this.ZV29ContaPagRecNumero = 0 ;
   this.OV29ContaPagRecNumero = 0 ;
   this.AV34TipoConta = "" ;
   this.ZV34TipoConta = "" ;
   this.OV34TipoConta = "" ;
   this.AV35StConta = "" ;
   this.ZV35StConta = "" ;
   this.OV35StConta = "" ;
   this.AV30ClienteId = 0 ;
   this.ZV30ClienteId = 0 ;
   this.OV30ClienteId = 0 ;
   this.AV31Fantasia = "" ;
   this.ZV31Fantasia = "" ;
   this.OV31Fantasia = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1910ContaOcorrenciaData = gx.date.nullDate() ;
   this.O1910ContaOcorrenciaData = gx.date.nullDate() ;
   this.Z1911ContaOcorrenciaHora = "" ;
   this.O1911ContaOcorrenciaHora = "" ;
   this.Z1909ContaOcorrenciaSequencia = 0 ;
   this.O1909ContaOcorrenciaSequencia = 0 ;
   this.Z1902ContaOcorrenciaOcoId = 0 ;
   this.O1902ContaOcorrenciaOcoId = 0 ;
   this.Z1903ContaOcorrenciaOcoDescricao = "" ;
   this.O1903ContaOcorrenciaOcoDescricao = "" ;
   this.Z1904ContaOcorrenciaAlineaId = 0 ;
   this.O1904ContaOcorrenciaAlineaId = 0 ;
   this.Z1908ContaOcorrenciaTpCobDescricao = "" ;
   this.O1908ContaOcorrenciaTpCobDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV29ContaPagRecNumero = 0 ;
   this.AV34TipoConta = "" ;
   this.AV35StConta = "" ;
   this.AV30ClienteId = 0 ;
   this.AV31Fantasia = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV32TpPagRec = "" ;
   this.AV36Situacao = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1901ContaOcorrenciaOcoEmpId = "" ;
   this.A1906ContaOcorrenciaTpCobEmpId = "" ;
   this.A1907ContaOcorrenciaTpCobId = 0 ;
   this.A1910ContaOcorrenciaData = gx.date.nullDate() ;
   this.A1911ContaOcorrenciaHora = "" ;
   this.A1909ContaOcorrenciaSequencia = 0 ;
   this.A1902ContaOcorrenciaOcoId = 0 ;
   this.A1903ContaOcorrenciaOcoDescricao = "" ;
   this.A1904ContaOcorrenciaAlineaId = 0 ;
   this.A1908ContaOcorrenciaTpCobDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.Events = {"e11ar2_client": ["'ANTERIOR'", true] ,"e12ar2_client": ["'PROXIMO'", true] ,"e16ar2_client": ["VPAGINA.CLICK", true] ,"e13ar2_client": ["'PROCURAR'", true] ,"e14ar2_client": ["'NOVO'", true] ,"e15ar2_client": ["'FECHAR'", true] ,"e19ar2_client": ["'ALTERAR'", true] ,"e20ar2_client": ["'EXCLUIR'", true] ,"e21ar2_client": ["'CONSULTAR'", true] ,"e22ar2_client": ["'ATUALIZAPAGINA'", true] ,"e24ar2_client": ["ENTER", true] ,"e25ar2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'CONTAOCORRENCIADATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAOCORRENCIADATA","Title")',ctrl:'CONTAOCORRENCIADATA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONTAOCORRENCIAHORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAOCORRENCIAHORA","Title")',ctrl:'CONTAOCORRENCIAHORA',prop:'Title'},{ctrl:'CONTAOCORRENCIASEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAOCORRENCIASEQUENCIA","Title")',ctrl:'CONTAOCORRENCIASEQUENCIA',prop:'Title'},{ctrl:'CONTAOCORRENCIAOCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAOCORRENCIAOCOID","Title")',ctrl:'CONTAOCORRENCIAOCOID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV36Situacao',fld:'vSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV36Situacao',fld:'vSITUACAO'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Situacao',fld:'vSITUACAO'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV36Situacao',fld:'vSITUACAO'},{av:'A1909ContaOcorrenciaSequencia',fld:'CONTAOCORRENCIASEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1909ContaOcorrenciaSequencia',fld:'CONTAOCORRENCIASEQUENCIA'},{av:'AV36Situacao',fld:'vSITUACAO'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV36Situacao',fld:'vSITUACAO'},{av:'A1909ContaOcorrenciaSequencia',fld:'CONTAOCORRENCIASEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1909ContaOcorrenciaSequencia',fld:'CONTAOCORRENCIASEQUENCIA'},{av:'AV36Situacao',fld:'vSITUACAO'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV36Situacao',fld:'vSITUACAO'},{av:'A1909ContaOcorrenciaSequencia',fld:'CONTAOCORRENCIASEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1909ContaOcorrenciaSequencia',fld:'CONTAOCORRENCIASEQUENCIA'},{av:'AV36Situacao',fld:'vSITUACAO'},{av:'AV32TpPagRec',fld:'vTPPAGREC'},{av:'AV31Fantasia',fld:'vFANTASIA'},{av:'AV30ClienteId',fld:'vCLIENTEID'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32TpPagRec", "vTPPAGREC", 0, "char");
   this.setVCMap("AV36Situacao", "vSITUACAO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcontasocorrencias());
