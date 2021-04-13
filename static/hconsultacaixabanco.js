/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:50.7
*/
gx.evt.autoSkip = false;
gx.define('hconsultacaixabanco', false, function () {
   this.ServerClass =  "hconsultacaixabanco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19ApenasAtivos=gx.fn.getControlValue("vAPENASATIVOS") ;
      this.AV8UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26DataAux=gx.fn.getDateValue("vDATAAUX") ;
      this.A1014CaixaBancoEmpresaId=gx.fn.getControlValue("CAIXABANCOEMPRESAID") ;
      this.Gx_date=gx.fn.getDateValue("vTODAY") ;
      this.AV18PCaixaBancoId=gx.fn.getIntegerValue("vPCAIXABANCOID",'.') ;
   };
   this.e188o2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e118o2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e128o2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e138o2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e148o2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e158o2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e218o2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e168o2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e228o1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,30,31,32,33,34,35,36,37,43,46,49,51,53,55,57,58,59,60,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacaixabanco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1015,30,"CAIXABANCOID","","","CaixaBancoId","int",0,"px",5,5,"right",null,[],1015,"CaixaBancoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1017,31,"CAIXABANCODESCRICAO","","","CaixaBancoDescricao","svchar",0,"px",25,25,"left",null,[],1017,"CaixaBancoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1539,32,"FILIALCXBCOID","","","FilialCxBcoId","int",0,"px",7,7,"right",null,[],1539,"FilialCxBcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1021,33,"CAIXABANCONUMEROCONTA","","","CaixaBancoNumeroConta","svchar",0,"px",15,15,"left",null,[],1021,"CaixaBancoNumeroConta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(948,34,"BANCONOME","","","BancoNome","svchar",0,"px",25,25,"left",null,[],948,"BancoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Valorsaldo",35,"vVALORSALDO","Saldo","","ValorSaldo","decimal",0,"px",18,18,"right",null,[],"Valorsaldo","ValorSaldo",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Desctipo",36,"vDESCTIPO","D/C","","DescTipo","svchar",0,"px",10,10,"left",null,[],"Desctipo","DescTipo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1037,37,"CONTACONTABILCXBCOEMPRESAID","Empresa Conta Contábil","","ContaContabilCxBcoEmpresaId","char",0,"px",10,10,"left",null,[],1037,"ContaContabilCxBcoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCOID",gxz:"ZV15CaixaBancoId",gxold:"OV15CaixaBancoId",gxvar:"AV15CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV15CaixaBancoId,0)},c2v:function(){gx.O.AV15CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCONUMEROCONTA",gxz:"ZV21CaixaBancoNumeroConta",gxold:"OV21CaixaBancoNumeroConta",gxvar:"AV21CaixaBancoNumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CaixaBancoNumeroConta=Value},v2z:function(Value){gx.O.ZV21CaixaBancoNumeroConta=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCONUMEROCONTA",gx.O.AV21CaixaBancoNumeroConta,0)},c2v:function(){gx.O.AV21CaixaBancoNumeroConta=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCONUMEROCONTA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCODESCRICAO",gxz:"ZV16CaixaBancoDescricao",gxold:"OV16CaixaBancoDescricao",gxvar:"AV16CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV16CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV16CaixaBancoDescricao,0)},c2v:function(){gx.O.AV16CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(29),gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALCXBCOID",gxz:"Z1539FilialCxBcoId",gxold:"O1539FilialCxBcoId",gxvar:"A1539FilialCxBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1539FilialCxBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1539FilialCxBcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALCXBCOID",row || gx.fn.currentGridRowImpl(29),gx.O.A1539FilialCxBcoId,0)},c2v:function(){gx.O.A1539FilialCxBcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALCXBCOID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCONUMEROCONTA",gxz:"Z1021CaixaBancoNumeroConta",gxold:"O1021CaixaBancoNumeroConta",gxvar:"A1021CaixaBancoNumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1021CaixaBancoNumeroConta=Value},v2z:function(Value){gx.O.Z1021CaixaBancoNumeroConta=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCONUMEROCONTA",row || gx.fn.currentGridRowImpl(29),gx.O.A1021CaixaBancoNumeroConta,0)},c2v:function(){gx.O.A1021CaixaBancoNumeroConta=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCONUMEROCONTA",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCONOME",gxz:"Z948BancoNome",gxold:"O948BancoNome",gxvar:"A948BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A948BancoNome=Value},v2z:function(Value){gx.O.Z948BancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(29),gx.O.A948BancoNome,0)},c2v:function(){gx.O.A948BancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORSALDO",gxz:"ZV20ValorSaldo",gxold:"OV20ValorSaldo",gxvar:"AV20ValorSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20ValorSaldo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20ValorSaldo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORSALDO",row || gx.fn.currentGridRowImpl(29),gx.O.AV20ValorSaldo,2,',')},c2v:function(){gx.O.AV20ValorSaldo=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORSALDO",row || gx.fn.currentGridRowImpl(29),'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPO",gxz:"ZV17DescTipo",gxold:"OV17DescTipo",gxvar:"AV17DescTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17DescTipo=Value},v2z:function(Value){gx.O.ZV17DescTipo=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCTIPO",row || gx.fn.currentGridRowImpl(29),gx.O.AV17DescTipo,0)},c2v:function(){gx.O.AV17DescTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCTIPO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILCXBCOEMPRESAID",gxz:"Z1037ContaContabilCxBcoEmpresaId",gxold:"O1037ContaContabilCxBcoEmpresaId",gxvar:"A1037ContaContabilCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1037ContaContabilCxBcoEmpresaId=Value},v2z:function(Value){gx.O.Z1037ContaContabilCxBcoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(29),gx.O.A1037ContaContabilCxBcoEmpresaId,0)},c2v:function(){gx.O.A1037ContaContabilCxBcoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLENAV",grid:0};
   GXValidFnc[46]={fld:"IMAGE1",grid:0};
   GXValidFnc[49]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[51]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[53]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[55]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[57]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOFILIALID",gxz:"ZV27UsuarioFilialId",gxold:"OV27UsuarioFilialId",gxvar:"AV27UsuarioFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27UsuarioFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27UsuarioFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSUARIOFILIALID",gx.O.AV27UsuarioFilialId,0)},c2v:function(){gx.O.AV27UsuarioFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSUARIOFILIALID",'.')},nac:gx.falseFn};
   this.AV15CaixaBancoId = 0 ;
   this.ZV15CaixaBancoId = 0 ;
   this.OV15CaixaBancoId = 0 ;
   this.AV21CaixaBancoNumeroConta = "" ;
   this.ZV21CaixaBancoNumeroConta = "" ;
   this.OV21CaixaBancoNumeroConta = "" ;
   this.AV16CaixaBancoDescricao = "" ;
   this.ZV16CaixaBancoDescricao = "" ;
   this.OV16CaixaBancoDescricao = "" ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.Z1539FilialCxBcoId = 0 ;
   this.O1539FilialCxBcoId = 0 ;
   this.Z1021CaixaBancoNumeroConta = "" ;
   this.O1021CaixaBancoNumeroConta = "" ;
   this.Z948BancoNome = "" ;
   this.O948BancoNome = "" ;
   this.ZV20ValorSaldo = 0 ;
   this.OV20ValorSaldo = 0 ;
   this.ZV17DescTipo = "" ;
   this.OV17DescTipo = "" ;
   this.Z1037ContaContabilCxBcoEmpresaId = "" ;
   this.O1037ContaContabilCxBcoEmpresaId = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV27UsuarioFilialId = 0 ;
   this.ZV27UsuarioFilialId = 0 ;
   this.OV27UsuarioFilialId = 0 ;
   this.AV15CaixaBancoId = 0 ;
   this.AV21CaixaBancoNumeroConta = "" ;
   this.AV16CaixaBancoDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV27UsuarioFilialId = 0 ;
   this.AV18PCaixaBancoId = 0 ;
   this.AV19ApenasAtivos = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A950BancoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.A1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1539FilialCxBcoId = 0 ;
   this.A1021CaixaBancoNumeroConta = "" ;
   this.A948BancoNome = "" ;
   this.AV20ValorSaldo = 0 ;
   this.AV17DescTipo = "" ;
   this.A1037ContaContabilCxBcoEmpresaId = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.AV8UsrCod = "" ;
   this.AV26DataAux = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.Events = {"e188o2_client": ["ENTER", true] ,"e118o2_client": ["'GXM_FIRST'", true] ,"e128o2_client": ["'GXM_PREVIOUS'", true] ,"e138o2_client": ["'GXM_NEXT'", true] ,"e148o2_client": ["'GXM_LAST'", true] ,"e158o2_client": ["'PROCURAR'", true] ,"e218o2_client": ["'ATUALIZAPAGINA'", true] ,"e168o2_client": ["'NOVO'", true] ,"e228o1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{ctrl:'CAIXABANCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCOID","Title")',ctrl:'CAIXABANCOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CAIXABANCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCODESCRICAO","Title")',ctrl:'CAIXABANCODESCRICAO',prop:'Title'},{ctrl:'FILIALCXBCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALCXBCOID","Title")',ctrl:'FILIALCXBCOID',prop:'Title'},{ctrl:'CAIXABANCONUMEROCONTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCONUMEROCONTA","Title")',ctrl:'CAIXABANCONUMEROCONTA',prop:'Title'},{ctrl:'BANCONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCONOME","Title")',ctrl:'BANCONOME',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'}],[{av:'AV18PCaixaBancoId',fld:'vPCAIXABANCOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'}],[{av:'AV10MsgErro',fld:'vMSGERRO'},{av:'AV17DescTipo',fld:'vDESCTIPO'},{av:'AV20ValorSaldo',fld:'vVALORSALDO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'}],[]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV21CaixaBancoNumeroConta',fld:'vCAIXABANCONUMEROCONTA'},{av:'AV16CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19ApenasAtivos',fld:'vAPENASATIVOS',hsh:true},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV26DataAux',fld:'vDATAAUX'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'Gx_date',fld:'vTODAY'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19ApenasAtivos", "vAPENASATIVOS", 0, "char");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26DataAux", "vDATAAUX", 0, "date");
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("Gx_date", "vTODAY", 0, "date");
   this.setVCMap("AV18PCaixaBancoId", "vPCAIXABANCOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19ApenasAtivos", "vAPENASATIVOS", 0, "char");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26DataAux", "vDATAAUX", 0, "date");
   this.setVCMap("A1014CaixaBancoEmpresaId", "CAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("Gx_date", "vTODAY", 0, "date");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19ApenasAtivos"});
   GridContainer.addRefreshingVar({rfrVar:"AV8UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"A1015CaixaBancoId", rfrProp:"Value", gxAttId:"1015"});
   GridContainer.addRefreshingVar({rfrVar:"AV26DataAux"});
   GridContainer.addRefreshingVar({rfrVar:"A1014CaixaBancoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"Gx_date"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacaixabanco());
