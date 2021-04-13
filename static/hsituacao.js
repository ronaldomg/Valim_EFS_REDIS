/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:22.65
*/
gx.evt.autoSkip = false;
gx.define('hsituacao', false, function () {
   this.ServerClass =  "hsituacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11uo2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12uo2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16uo2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13uo2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14uo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15uo2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e20uo2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21uo2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22uo2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23uo2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24uo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25uo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,36,37,38,39,40,41,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsituacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5350,31,"SITUACAOID","","","SituacaoId","int",0,"px",2,2,"right",null,[],5350,"SituacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5344,32,"SITUACAODESCRICAO","","","SituacaoDescricao","char",0,"px",30,30,"left",null,[],5344,"SituacaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpdisponivel","vBMPDISPONIVEL",33,0,"px",17,"px",null,"","À Venda","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpreservado","vBMPRESERVADO",34,0,"px",17,"px",null,"","Reservado","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpvendido","vBMPVENDIDO",35,0,"px",17,"px",null,"","Vendido","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",36,0,"px",17,"px","e20uo2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",37,0,"px",17,"px","e21uo2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",38,0,"px",17,"px","e22uo2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5345,39,"SITUACAOSNVENDA","À Venda","","SituacaoSnVenda","char",0,"px",1,1,"left",null,[],5345,"SituacaoSnVenda",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5346,40,"SITUACAOSNRESERVADO","Reservado","","SituacaoSnReservado","char",0,"px",1,1,"left",null,[],5346,"SituacaoSnReservado",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5347,41,"SITUACAOSNVENDIDO","Vendido","","SituacaoSnVendido","char",0,"px",1,1,"left",null,[],5347,"SituacaoSnVendido",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[19]={fld:"BTNHELP",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOID",gxz:"Z5350SituacaoId",gxold:"O5350SituacaoId",gxvar:"A5350SituacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5350SituacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5350SituacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SITUACAOID",row || gx.fn.currentGridRowImpl(30),gx.O.A5350SituacaoId,0)},c2v:function(){gx.O.A5350SituacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SITUACAOID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAODESCRICAO",gxz:"Z5344SituacaoDescricao",gxold:"O5344SituacaoDescricao",gxvar:"A5344SituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5344SituacaoDescricao=Value},v2z:function(Value){gx.O.Z5344SituacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(30),gx.O.A5344SituacaoDescricao,0)},c2v:function(){gx.O.A5344SituacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDISPONIVEL",gxz:"ZV28BmpDisponivel",gxold:"OV28BmpDisponivel",gxvar:"AV28BmpDisponivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28BmpDisponivel=Value},v2z:function(Value){gx.O.ZV28BmpDisponivel=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDISPONIVEL",row || gx.fn.currentGridRowImpl(30),gx.O.AV28BmpDisponivel,gx.O.AV39Bmpdisponivel_GXI)},c2v:function(){gx.O.AV39Bmpdisponivel_GXI=this.val_GXI();gx.O.AV28BmpDisponivel=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDISPONIVEL",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDISPONIVEL_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV39Bmpdisponivel_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPRESERVADO",gxz:"ZV29BmpReservado",gxold:"OV29BmpReservado",gxvar:"AV29BmpReservado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29BmpReservado=Value},v2z:function(Value){gx.O.ZV29BmpReservado=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPRESERVADO",row || gx.fn.currentGridRowImpl(30),gx.O.AV29BmpReservado,gx.O.AV40Bmpreservado_GXI)},c2v:function(){gx.O.AV40Bmpreservado_GXI=this.val_GXI();gx.O.AV29BmpReservado=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPRESERVADO",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPRESERVADO_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV40Bmpreservado_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVENDIDO",gxz:"ZV30BmpVendido",gxold:"OV30BmpVendido",gxvar:"AV30BmpVendido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30BmpVendido=Value},v2z:function(Value){gx.O.ZV30BmpVendido=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVENDIDO",row || gx.fn.currentGridRowImpl(30),gx.O.AV30BmpVendido,gx.O.AV41Bmpvendido_GXI)},c2v:function(){gx.O.AV41Bmpvendido_GXI=this.val_GXI();gx.O.AV30BmpVendido=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVENDIDO",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVENDIDO_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV41Bmpvendido_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOSNVENDA",gxz:"Z5345SituacaoSnVenda",gxold:"O5345SituacaoSnVenda",gxvar:"A5345SituacaoSnVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5345SituacaoSnVenda=Value},v2z:function(Value){gx.O.Z5345SituacaoSnVenda=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOSNVENDA",row || gx.fn.currentGridRowImpl(30),gx.O.A5345SituacaoSnVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5345SituacaoSnVenda=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOSNVENDA",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOSNRESERVADO",gxz:"Z5346SituacaoSnReservado",gxold:"O5346SituacaoSnReservado",gxvar:"A5346SituacaoSnReservado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5346SituacaoSnReservado=Value},v2z:function(Value){gx.O.Z5346SituacaoSnReservado=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOSNRESERVADO",row || gx.fn.currentGridRowImpl(30),gx.O.A5346SituacaoSnReservado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5346SituacaoSnReservado=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOSNRESERVADO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOSNVENDIDO",gxz:"Z5347SituacaoSnVendido",gxold:"O5347SituacaoSnVendido",gxvar:"A5347SituacaoSnVendido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5347SituacaoSnVendido=Value},v2z:function(Value){gx.O.Z5347SituacaoSnVendido=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOSNVENDIDO",row || gx.fn.currentGridRowImpl(30),gx.O.A5347SituacaoSnVendido,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5347SituacaoSnVendido=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOSNVENDIDO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5350SituacaoId = 0 ;
   this.O5350SituacaoId = 0 ;
   this.Z5344SituacaoDescricao = "" ;
   this.O5344SituacaoDescricao = "" ;
   this.ZV28BmpDisponivel = "" ;
   this.OV28BmpDisponivel = "" ;
   this.ZV29BmpReservado = "" ;
   this.OV29BmpReservado = "" ;
   this.ZV30BmpVendido = "" ;
   this.OV30BmpVendido = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5345SituacaoSnVenda = "" ;
   this.O5345SituacaoSnVenda = "" ;
   this.Z5346SituacaoSnReservado = "" ;
   this.O5346SituacaoSnReservado = "" ;
   this.Z5347SituacaoSnVendido = "" ;
   this.O5347SituacaoSnVendido = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A5318SituacaoEmpresaId = "" ;
   this.A5350SituacaoId = 0 ;
   this.A5344SituacaoDescricao = "" ;
   this.AV28BmpDisponivel = "" ;
   this.AV29BmpReservado = "" ;
   this.AV30BmpVendido = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5345SituacaoSnVenda = "" ;
   this.A5346SituacaoSnReservado = "" ;
   this.A5347SituacaoSnVendido = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e11uo2_client": ["'ANTERIOR'", true] ,"e12uo2_client": ["'PROXIMO'", true] ,"e16uo2_client": ["VPAGINA.CLICK", true] ,"e13uo2_client": ["'NOVO'", true] ,"e14uo2_client": ["'FECHAR'", true] ,"e15uo2_client": ["'IMPRIMIR'", true] ,"e20uo2_client": ["'ALTERAR'", true] ,"e21uo2_client": ["'EXCLUIR'", true] ,"e22uo2_client": ["'CONSULTAR'", true] ,"e23uo2_client": ["'ATUALIZAPAGINA'", true] ,"e24uo2_client": ["ENTER", true] ,"e25uo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'}],[{ctrl:'SITUACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAOID","Title")',ctrl:'SITUACAOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SITUACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAODESCRICAO","Title")',ctrl:'SITUACAODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'}],[{av:'AV28BmpDisponivel',fld:'vBMPDISPONIVEL'},{av:'AV29BmpReservado',fld:'vBMPRESERVADO'},{av:'AV30BmpVendido',fld:'vBMPVENDIDO'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV27QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV27QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A5350SituacaoId',fld:'SITUACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A5345SituacaoSnVenda", rfrProp:"Value", gxAttId:"5345"});
   GridContainer.addRefreshingVar({rfrVar:"A5346SituacaoSnReservado", rfrProp:"Value", gxAttId:"5346"});
   GridContainer.addRefreshingVar({rfrVar:"A5347SituacaoSnVendido", rfrProp:"Value", gxAttId:"5347"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsituacao());
