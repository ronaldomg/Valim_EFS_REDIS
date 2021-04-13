/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:24.90
*/
gx.evt.autoSkip = false;
gx.define('hhistoricofcx', false, function () {
   this.ServerClass =  "hhistoricofcx" ;
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
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV44SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A1568TipoSaldoEmpresaId=gx.fn.getControlValue("TIPOSALDOEMPRESAID") ;
      this.A1569TipoSaldoId=gx.fn.getIntegerValue("TIPOSALDOID",'.') ;
      this.AV41TipoSaldoId=gx.fn.getIntegerValue("vTIPOSALDOID",'.') ;
      this.A1570TipoSaldoDescricao=gx.fn.getControlValue("TIPOSALDODESCRICAO") ;
   };
   this.Validv_Tiposaldoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSALDOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11oc2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12oc2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17oc2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13oc2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14oc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15oc2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16oc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21oc2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22oc2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23oc2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24oc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25oc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26oc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,19,21,24,26,28,30,33,35,38,40,47,50,53,55,57,59,61,63,66,68,69,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,93,95,96,98];
   this.GXLastCtrlId =98;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",72,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hhistoricofcx",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3550,73,"HISTORICOFCXID","","","HistoricoFcxId","int",0,"px",4,4,"right",null,[],3550,"HistoricoFcxId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3540,74,"HISTORICOFCXDESCRICAO","","","HistoricoFcxDescricao","svchar",0,"px",30,30,"left",null,[],3540,"HistoricoFcxDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4359,75,"HISTORICOFCXTIPOSALDOID","","","HistoricoFcxTipoSaldoId","int",0,"px",7,7,"right",null,[],4359,"HistoricoFcxTipoSaldoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tiposaldodesc",76,"vTIPOSALDODESC","Descricao","","TipoSaldoDesc","svchar",0,"px",20,20,"left",null,[],"Tiposaldodesc","TipoSaldoDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Historicofcxtipodesc",77,"vHISTORICOFCXTIPODESC","","","HistoricoFcxTipoDesc","char",0,"px",15,15,"left",null,[],"Historicofcxtipodesc","HistoricoFcxTipoDesc",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Historicofcxsinaldesc",78,"vHISTORICOFCXSINALDESC","","","HistoricoFcxSinalDesc","char",0,"px",10,10,"left",null,[],"Historicofcxsinaldesc","HistoricoFcxSinalDesc",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmphistoricofcxabregaveta","vBMPHISTORICOFCXABREGAVETA",79,0,"px",17,"px",null,"","Gaveta","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmphistoricofcxexcomp","vBMPHISTORICOFCXEXCOMP",80,0,"px",17,"px",null,"","Complemento","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",81,0,"px",17,"px","e21oc2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",82,0,"px",17,"px","e22oc2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",83,0,"px",17,"px","e23oc2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3544,84,"HISTORICOFCXEXICOMPLEMENTO","Exige Complemento","","HistoricoFcxExiComplemento","char",0,"px",1,1,"left",null,[],3544,"HistoricoFcxExiComplemento",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3545,85,"HISTORICOFCXABREGAVETA","Abre Gaveta","","HistoricoFcxAbreGaveta","char",0,"px",1,1,"left",null,[],3545,"HistoricoFcxAbreGaveta",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3543,86,"HISTORICOFCXTIPO","Tipo de Histórico","","HistoricoFcxTipo","char",0,"px",1,1,"left",null,[],3543,"HistoricoFcxTipo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3542,87,"HISTORICOFCXSINAL","Sinal do Histórico","","HistoricoFcxSinal","char",0,"px",1,1,"left",null,[],3542,"HistoricoFcxSinal",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXID",gxz:"ZV27HistoricoFcxid",gxold:"OV27HistoricoFcxid",gxvar:"AV27HistoricoFcxid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27HistoricoFcxid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27HistoricoFcxid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXID",gx.O.AV27HistoricoFcxid,0)},c2v:function(){gx.O.AV27HistoricoFcxid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXTIPO",gxz:"ZV29HistoricoFcxTipo",gxold:"OV29HistoricoFcxTipo",gxvar:"AV29HistoricoFcxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29HistoricoFcxTipo=Value},v2z:function(Value){gx.O.ZV29HistoricoFcxTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vHISTORICOFCXTIPO",gx.O.AV29HistoricoFcxTipo)},c2v:function(){gx.O.AV29HistoricoFcxTipo=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXTIPO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXDESCRICAO",gxz:"ZV28HistoricoFcxDescricao",gxold:"OV28HistoricoFcxDescricao",gxvar:"AV28HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.ZV28HistoricoFcxDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXDESCRICAO",gx.O.AV28HistoricoFcxDescricao,0)},c2v:function(){gx.O.AV28HistoricoFcxDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXSINAL",gxz:"ZV30HistoricoFcxSinal",gxold:"OV30HistoricoFcxSinal",gxvar:"AV30HistoricoFcxSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30HistoricoFcxSinal=Value},v2z:function(Value){gx.O.ZV30HistoricoFcxSinal=Value},v2c:function(){gx.fn.setComboBoxValue("vHISTORICOFCXSINAL",gx.O.AV30HistoricoFcxSinal)},c2v:function(){gx.O.AV30HistoricoFcxSinal=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXSINAL")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE10",grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXTIPOSALDOID",gxz:"ZV36HistoricoFcxTipoSaldoId",gxold:"OV36HistoricoFcxTipoSaldoId",gxvar:"AV36HistoricoFcxTipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36HistoricoFcxTipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36HistoricoFcxTipoSaldoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXTIPOSALDOID",gx.O.AV36HistoricoFcxTipoSaldoId,0)},c2v:function(){gx.O.AV36HistoricoFcxTipoSaldoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOFCXTIPOSALDOID",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDODESCRICAO",gxz:"ZV38TipoSaldoDescricao",gxold:"OV38TipoSaldoDescricao",gxvar:"AV38TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TipoSaldoDescricao=Value},v2z:function(Value){gx.O.ZV38TipoSaldoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDODESCRICAO",gx.O.AV38TipoSaldoDescricao,0)},c2v:function(){gx.O.AV38TipoSaldoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TABLE6",grid:0};
   GXValidFnc[53]={fld:"IMAGE2",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"IMAGE1",grid:0};
   GXValidFnc[61]={fld:"BTNHELP",grid:0};
   GXValidFnc[63]={fld:"TABLE5",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXID",gxz:"Z3550HistoricoFcxId",gxold:"O3550HistoricoFcxId",gxvar:"A3550HistoricoFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3550HistoricoFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3550HistoricoFcxId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXID",row || gx.fn.currentGridRowImpl(72),gx.O.A3550HistoricoFcxId,0)},c2v:function(){gx.O.A3550HistoricoFcxId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOFCXID",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXDESCRICAO",gxz:"Z3540HistoricoFcxDescricao",gxold:"O3540HistoricoFcxDescricao",gxvar:"A3540HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3540HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.Z3540HistoricoFcxDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(72),gx.O.A3540HistoricoFcxDescricao,0)},c2v:function(){gx.O.A3540HistoricoFcxDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPOSALDOID",gxz:"Z4359HistoricoFcxTipoSaldoId",gxold:"O4359HistoricoFcxTipoSaldoId",gxvar:"A4359HistoricoFcxTipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4359HistoricoFcxTipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4359HistoricoFcxTipoSaldoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXTIPOSALDOID",row || gx.fn.currentGridRowImpl(72),gx.O.A4359HistoricoFcxTipoSaldoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4359HistoricoFcxTipoSaldoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOFCXTIPOSALDOID",row || gx.fn.currentGridRowImpl(72),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSALDODESC",gxz:"ZV39TipoSaldoDesc",gxold:"OV39TipoSaldoDesc",gxvar:"AV39TipoSaldoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV39TipoSaldoDesc=Value},v2z:function(Value){gx.O.ZV39TipoSaldoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOSALDODESC",row || gx.fn.currentGridRowImpl(72),gx.O.AV39TipoSaldoDesc,0)},c2v:function(){gx.O.AV39TipoSaldoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOSALDODESC",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFCXTIPODESC",gxz:"ZV33HistoricoFcxTipoDesc",gxold:"OV33HistoricoFcxTipoDesc",gxvar:"AV33HistoricoFcxTipoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33HistoricoFcxTipoDesc=Value},v2z:function(Value){gx.O.ZV33HistoricoFcxTipoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vHISTORICOFCXTIPODESC",row || gx.fn.currentGridRowImpl(72),gx.O.AV33HistoricoFcxTipoDesc,0)},c2v:function(){gx.O.AV33HistoricoFcxTipoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vHISTORICOFCXTIPODESC",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFCXSINALDESC",gxz:"ZV34HistoricoFcxSinalDesc",gxold:"OV34HistoricoFcxSinalDesc",gxvar:"AV34HistoricoFcxSinalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV34HistoricoFcxSinalDesc=Value},v2z:function(Value){gx.O.ZV34HistoricoFcxSinalDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vHISTORICOFCXSINALDESC",row || gx.fn.currentGridRowImpl(72),gx.O.AV34HistoricoFcxSinalDesc,0)},c2v:function(){gx.O.AV34HistoricoFcxSinalDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vHISTORICOFCXSINALDESC",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPHISTORICOFCXABREGAVETA",gxz:"ZV32bmpHistoricoFcxAbreGaveta",gxold:"OV32bmpHistoricoFcxAbreGaveta",gxvar:"AV32bmpHistoricoFcxAbreGaveta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpHistoricoFcxAbreGaveta=Value},v2z:function(Value){gx.O.ZV32bmpHistoricoFcxAbreGaveta=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPHISTORICOFCXABREGAVETA",row || gx.fn.currentGridRowImpl(72),gx.O.AV32bmpHistoricoFcxAbreGaveta,gx.O.AV54Bmphistoricofcxabregaveta_GXI)},c2v:function(){gx.O.AV54Bmphistoricofcxabregaveta_GXI=this.val_GXI();gx.O.AV32bmpHistoricoFcxAbreGaveta=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXABREGAVETA",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXABREGAVETA_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV54Bmphistoricofcxabregaveta_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPHISTORICOFCXEXCOMP",gxz:"ZV31bmpHistoricoFcxExComp",gxold:"OV31bmpHistoricoFcxExComp",gxvar:"AV31bmpHistoricoFcxExComp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpHistoricoFcxExComp=Value},v2z:function(Value){gx.O.ZV31bmpHistoricoFcxExComp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPHISTORICOFCXEXCOMP",row || gx.fn.currentGridRowImpl(72),gx.O.AV31bmpHistoricoFcxExComp,gx.O.AV53Bmphistoricofcxexcomp_GXI)},c2v:function(){gx.O.AV53Bmphistoricofcxexcomp_GXI=this.val_GXI();gx.O.AV31bmpHistoricoFcxExComp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXEXCOMP",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXEXCOMP_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV53Bmphistoricofcxexcomp_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(72),gx.O.AV7bmpAlt,gx.O.AV50Bmpalt_GXI)},c2v:function(){gx.O.AV50Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV50Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72),gx.O.AV8bmpExc,gx.O.AV51Bmpexc_GXI)},c2v:function(){gx.O.AV51Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV51Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(72),gx.O.AV16bmpCon,gx.O.AV52Bmpcon_GXI)},c2v:function(){gx.O.AV52Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(72))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(72))}, gxvar_GXI:'AV52Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXEXICOMPLEMENTO",gxz:"Z3544HistoricoFcxExiComplemento",gxold:"O3544HistoricoFcxExiComplemento",gxvar:"A3544HistoricoFcxExiComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3544HistoricoFcxExiComplemento=Value},v2z:function(Value){gx.O.Z3544HistoricoFcxExiComplemento=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXEXICOMPLEMENTO",row || gx.fn.currentGridRowImpl(72),gx.O.A3544HistoricoFcxExiComplemento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3544HistoricoFcxExiComplemento=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXEXICOMPLEMENTO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXABREGAVETA",gxz:"Z3545HistoricoFcxAbreGaveta",gxold:"O3545HistoricoFcxAbreGaveta",gxvar:"A3545HistoricoFcxAbreGaveta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3545HistoricoFcxAbreGaveta=Value},v2z:function(Value){gx.O.Z3545HistoricoFcxAbreGaveta=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXABREGAVETA",row || gx.fn.currentGridRowImpl(72),gx.O.A3545HistoricoFcxAbreGaveta,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3545HistoricoFcxAbreGaveta=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXABREGAVETA",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPO",gxz:"Z3543HistoricoFcxTipo",gxold:"O3543HistoricoFcxTipo",gxvar:"A3543HistoricoFcxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3543HistoricoFcxTipo=Value},v2z:function(Value){gx.O.Z3543HistoricoFcxTipo=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXTIPO",row || gx.fn.currentGridRowImpl(72),gx.O.A3543HistoricoFcxTipo,0)},c2v:function(){gx.O.A3543HistoricoFcxTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXTIPO",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXSINAL",gxz:"Z3542HistoricoFcxSinal",gxold:"O3542HistoricoFcxSinal",gxvar:"A3542HistoricoFcxSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3542HistoricoFcxSinal=Value},v2z:function(Value){gx.O.Z3542HistoricoFcxSinal=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXSINAL",row || gx.fn.currentGridRowImpl(72),gx.O.A3542HistoricoFcxSinal,0)},c2v:function(){gx.O.A3542HistoricoFcxSinal=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXSINAL",row || gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"JS", format:2,grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tiposaldoempresaid,isvalid:null,rgrid:[],fld:"vTIPOSALDOEMPRESAID",gxz:"ZV40TipoSaldoEmpresaId",gxold:"OV40TipoSaldoEmpresaId",gxvar:"AV40TipoSaldoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TipoSaldoEmpresaId=Value},v2z:function(Value){gx.O.ZV40TipoSaldoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDOEMPRESAID",gx.O.AV40TipoSaldoEmpresaId,0)},c2v:function(){gx.O.AV40TipoSaldoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[98]={fld:"PROMPT_HISTORICOFCXTIPOSALDOID",grid:0};
   this.AV27HistoricoFcxid = 0 ;
   this.ZV27HistoricoFcxid = 0 ;
   this.OV27HistoricoFcxid = 0 ;
   this.AV29HistoricoFcxTipo = "" ;
   this.ZV29HistoricoFcxTipo = "" ;
   this.OV29HistoricoFcxTipo = "" ;
   this.AV28HistoricoFcxDescricao = "" ;
   this.ZV28HistoricoFcxDescricao = "" ;
   this.OV28HistoricoFcxDescricao = "" ;
   this.AV30HistoricoFcxSinal = "" ;
   this.ZV30HistoricoFcxSinal = "" ;
   this.OV30HistoricoFcxSinal = "" ;
   this.AV36HistoricoFcxTipoSaldoId = 0 ;
   this.ZV36HistoricoFcxTipoSaldoId = 0 ;
   this.OV36HistoricoFcxTipoSaldoId = 0 ;
   this.AV38TipoSaldoDescricao = "" ;
   this.ZV38TipoSaldoDescricao = "" ;
   this.OV38TipoSaldoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3550HistoricoFcxId = 0 ;
   this.O3550HistoricoFcxId = 0 ;
   this.Z3540HistoricoFcxDescricao = "" ;
   this.O3540HistoricoFcxDescricao = "" ;
   this.Z4359HistoricoFcxTipoSaldoId = 0 ;
   this.O4359HistoricoFcxTipoSaldoId = 0 ;
   this.ZV39TipoSaldoDesc = "" ;
   this.OV39TipoSaldoDesc = "" ;
   this.ZV33HistoricoFcxTipoDesc = "" ;
   this.OV33HistoricoFcxTipoDesc = "" ;
   this.ZV34HistoricoFcxSinalDesc = "" ;
   this.OV34HistoricoFcxSinalDesc = "" ;
   this.ZV32bmpHistoricoFcxAbreGaveta = "" ;
   this.OV32bmpHistoricoFcxAbreGaveta = "" ;
   this.ZV31bmpHistoricoFcxExComp = "" ;
   this.OV31bmpHistoricoFcxExComp = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3544HistoricoFcxExiComplemento = "" ;
   this.O3544HistoricoFcxExiComplemento = "" ;
   this.Z3545HistoricoFcxAbreGaveta = "" ;
   this.O3545HistoricoFcxAbreGaveta = "" ;
   this.Z3543HistoricoFcxTipo = "" ;
   this.O3543HistoricoFcxTipo = "" ;
   this.Z3542HistoricoFcxSinal = "" ;
   this.O3542HistoricoFcxSinal = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV40TipoSaldoEmpresaId = "" ;
   this.ZV40TipoSaldoEmpresaId = "" ;
   this.OV40TipoSaldoEmpresaId = "" ;
   this.AV27HistoricoFcxid = 0 ;
   this.AV29HistoricoFcxTipo = "" ;
   this.AV28HistoricoFcxDescricao = "" ;
   this.AV30HistoricoFcxSinal = "" ;
   this.AV36HistoricoFcxTipoSaldoId = 0 ;
   this.AV38TipoSaldoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV40TipoSaldoEmpresaId = "" ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.A4359HistoricoFcxTipoSaldoId = 0 ;
   this.AV39TipoSaldoDesc = "" ;
   this.AV33HistoricoFcxTipoDesc = "" ;
   this.AV34HistoricoFcxSinalDesc = "" ;
   this.AV32bmpHistoricoFcxAbreGaveta = "" ;
   this.AV31bmpHistoricoFcxExComp = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3544HistoricoFcxExiComplemento = "" ;
   this.A3545HistoricoFcxAbreGaveta = "" ;
   this.A3543HistoricoFcxTipo = "" ;
   this.A3542HistoricoFcxSinal = "" ;
   this.A1569TipoSaldoId = 0 ;
   this.A1568TipoSaldoEmpresaId = "" ;
   this.A1570TipoSaldoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV44SnRecuperaFiltro = "" ;
   this.AV41TipoSaldoId = 0 ;
   this.Events = {"e11oc2_client": ["'ANTERIOR'", true] ,"e12oc2_client": ["'PROXIMO'", true] ,"e17oc2_client": ["VPAGINA.CLICK", true] ,"e13oc2_client": ["'NOVO'", true] ,"e14oc2_client": ["'FECHAR'", true] ,"e15oc2_client": ["'IMPRIMIR'", true] ,"e16oc2_client": ["'PROCURAR'", true] ,"e21oc2_client": ["'ALTERAR'", true] ,"e22oc2_client": ["'EXCLUIR'", true] ,"e23oc2_client": ["'CONSULTAR'", true] ,"e24oc2_client": ["'ATUALIZAPAGINA'", true] ,"e25oc2_client": ["ENTER", true] ,"e26oc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV36HistoricoFcxTipoSaldoId',fld:'vHISTORICOFCXTIPOSALDOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV36HistoricoFcxTipoSaldoId',fld:'vHISTORICOFCXTIPOSALDOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'}],[{ctrl:'HISTORICOFCXID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOFCXID","Title")',ctrl:'HISTORICOFCXID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'HISTORICOFCXDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOFCXDESCRICAO","Title")',ctrl:'HISTORICOFCXDESCRICAO',prop:'Title'},{ctrl:'vHISTORICOFCXTIPODESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vHISTORICOFCXTIPODESC","Title")',ctrl:'vHISTORICOFCXTIPODESC',prop:'Title'},{ctrl:'vHISTORICOFCXSINALDESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vHISTORICOFCXSINALDESC","Title")',ctrl:'vHISTORICOFCXSINALDESC',prop:'Title'},{ctrl:'HISTORICOFCXTIPOSALDOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOFCXTIPOSALDOID","Title")',ctrl:'HISTORICOFCXTIPOSALDOID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'}],[{av:'AV34HistoricoFcxSinalDesc',fld:'vHISTORICOFCXSINALDESC'},{av:'AV33HistoricoFcxTipoDesc',fld:'vHISTORICOFCXTIPODESC'},{av:'AV31bmpHistoricoFcxExComp',fld:'vBMPHISTORICOFCXEXCOMP'},{av:'AV32bmpHistoricoFcxAbreGaveta',fld:'vBMPHISTORICOFCXABREGAVETA'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV39TipoSaldoDesc',fld:'vTIPOSALDODESC'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV36HistoricoFcxTipoSaldoId',fld:'vHISTORICOFCXTIPOSALDOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV36HistoricoFcxTipoSaldoId',fld:'vHISTORICOFCXTIPOSALDOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV36HistoricoFcxTipoSaldoId',fld:'vHISTORICOFCXTIPOSALDOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48Pgmname',fld:'vPGMNAME'},{av:'AV49Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV45QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV36HistoricoFcxTipoSaldoId',fld:'vHISTORICOFCXTIPOSALDOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'}],[{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'}],[{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'}],[{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV29HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV28HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV30HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV36HistoricoFcxTipoSaldoId',fld:'vHISTORICOFCXTIPOSALDOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'A4359HistoricoFcxTipoSaldoId',fld:'HISTORICOFCXTIPOSALDOID'},{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'AV40TipoSaldoEmpresaId',fld:'vTIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'},{av:'AV41TipoSaldoId',fld:'vTIPOSALDOID'},{av:'A1570TipoSaldoDescricao',fld:'TIPOSALDODESCRICAO'}],[]];
   this.setPrompt("PROMPT_HISTORICOFCXTIPOSALDOID", [38]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1568TipoSaldoEmpresaId", "TIPOSALDOEMPRESAID", 0, "char");
   this.setVCMap("A1569TipoSaldoId", "TIPOSALDOID", 0, "int");
   this.setVCMap("AV41TipoSaldoId", "vTIPOSALDOID", 0, "int");
   this.setVCMap("A1570TipoSaldoDescricao", "TIPOSALDODESCRICAO", 0, "svchar");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1568TipoSaldoEmpresaId", "TIPOSALDOEMPRESAID", 0, "char");
   this.setVCMap("A1569TipoSaldoId", "TIPOSALDOID", 0, "int");
   this.setVCMap("AV41TipoSaldoId", "vTIPOSALDOID", 0, "int");
   this.setVCMap("A1570TipoSaldoDescricao", "TIPOSALDODESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV44SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A3542HistoricoFcxSinal", rfrProp:"Value", gxAttId:"3542"});
   GridContainer.addRefreshingVar({rfrVar:"A3543HistoricoFcxTipo", rfrProp:"Value", gxAttId:"3543"});
   GridContainer.addRefreshingVar({rfrVar:"A3544HistoricoFcxExiComplemento", rfrProp:"Value", gxAttId:"3544"});
   GridContainer.addRefreshingVar({rfrVar:"A3545HistoricoFcxAbreGaveta", rfrProp:"Value", gxAttId:"3545"});
   GridContainer.addRefreshingVar({rfrVar:"A4359HistoricoFcxTipoSaldoId", rfrProp:"Value", gxAttId:"4359"});
   GridContainer.addRefreshingVar({rfrVar:"A1568TipoSaldoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar({rfrVar:"A1569TipoSaldoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV41TipoSaldoId"});
   GridContainer.addRefreshingVar({rfrVar:"A1570TipoSaldoDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhistoricofcx());
