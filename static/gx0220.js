/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:26:18.60
*/
gx.evt.autoSkip = false;
gx.define('gx0220', false, function () {
   this.ServerClass =  "gx0220" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pUsuarioId=gx.fn.getControlValue("vPUSUARIOID") ;
   };
   this.Validv_Cusuarioprivilegio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCUSUARIOPRIVILEGIO");
         this.AnyError  = 0;
         if ( ! ( this.AV8cUsuarioPrivilegio == "A" || this.AV8cUsuarioPrivilegio == "P" || this.AV8cUsuarioPrivilegio == "N" || this.AV8cUsuarioPrivilegio == "O" || (""==this.AV8cUsuarioPrivilegio) ) )
         {
            try {
               gxballoon.setError("Campo cUsuarioPrivilegio fora do intervalo");
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
   this.e131jc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141jc1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0220",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(75,53,"USUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(219,54,"USUARIONOME","Nome do Usuario","Selecionar","UsuarioNome","svchar",0,"px",35,35,"left",null,[],219,"UsuarioNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(604,55,"USUARIOPRIVILEGIO","Privilégio","UsuarioPrivilegio","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(605,56,"USUARIOSENHA","Senha","","UsuarioSenha","char",0,"px",32,32,"left",null,[],605,"UsuarioSenha",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(607,57,"USUARIOVALIDADESENHA","Validade Senha","","UsuarioValidadeSenha","int",0,"px",4,4,"right",null,[],607,"UsuarioValidadeSenha",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(609,58,"USUARIODATASENHA","Data Senha","","UsuarioDataSenha","date",0,"px",10,10,"right",null,[],609,"UsuarioDataSenha",true,0,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(612,59,"USUARIOSITUACAO","Situação","Situação","UsuarioSituacao","char","A","I",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(9827,60,"USUARIOSNTLS","TLS","","UsuarioSnTLS","char",0,"px",1,1,"left",null,[],9827,"UsuarioSnTLS",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKUSUARIOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOID",gxz:"ZV6cUsuarioId",gxold:"OV6cUsuarioId",gxvar:"AV6cUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cUsuarioId=Value},v2z:function(Value){gx.O.ZV6cUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIOID",gx.O.AV6cUsuarioId,0)},c2v:function(){gx.O.AV6cUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKUSUARIONOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIONOME",gxz:"ZV7cUsuarioNome",gxold:"OV7cUsuarioNome",gxvar:"AV7cUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cUsuarioNome=Value},v2z:function(Value){gx.O.ZV7cUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIONOME",gx.O.AV7cUsuarioNome,0)},c2v:function(){gx.O.AV7cUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKUSUARIOPRIVILEGIO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cusuarioprivilegio,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOPRIVILEGIO",gxz:"ZV8cUsuarioPrivilegio",gxold:"OV8cUsuarioPrivilegio",gxvar:"AV8cUsuarioPrivilegio",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cUsuarioPrivilegio=Value},v2z:function(Value){gx.O.ZV8cUsuarioPrivilegio=Value},v2c:function(){gx.fn.setComboBoxValue("vCUSUARIOPRIVILEGIO",gx.O.AV8cUsuarioPrivilegio)},c2v:function(){gx.O.AV8cUsuarioPrivilegio=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOPRIVILEGIO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKUSUARIOSENHA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOSENHA",gxz:"ZV9cUsuarioSenha",gxold:"OV9cUsuarioSenha",gxvar:"AV9cUsuarioSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cUsuarioSenha=Value},v2z:function(Value){gx.O.ZV9cUsuarioSenha=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIOSENHA",gx.O.AV9cUsuarioSenha,0)},c2v:function(){gx.O.AV9cUsuarioSenha=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOSENHA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKUSUARIODIRETORIORELATORIO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIODIRETORIORELATORIO",gxz:"ZV10cUsuarioDiretorioRelatorio",gxold:"OV10cUsuarioDiretorioRelatorio",gxvar:"AV10cUsuarioDiretorioRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cUsuarioDiretorioRelatorio=Value},v2z:function(Value){gx.O.ZV10cUsuarioDiretorioRelatorio=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIODIRETORIORELATORIO",gx.O.AV10cUsuarioDiretorioRelatorio,0)},c2v:function(){gx.O.AV10cUsuarioDiretorioRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIODIRETORIORELATORIO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKUSUARIOVALIDADESENHA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOVALIDADESENHA",gxz:"ZV11cUsuarioValidadeSenha",gxold:"OV11cUsuarioValidadeSenha",gxvar:"AV11cUsuarioValidadeSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cUsuarioValidadeSenha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cUsuarioValidadeSenha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCUSUARIOVALIDADESENHA",gx.O.AV11cUsuarioValidadeSenha,0)},c2v:function(){gx.O.AV11cUsuarioValidadeSenha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCUSUARIOVALIDADESENHA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKUSUARIOCHAVE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOCHAVE",gxz:"ZV12cUsuarioChave",gxold:"OV12cUsuarioChave",gxvar:"AV12cUsuarioChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cUsuarioChave=Value},v2z:function(Value){gx.O.ZV12cUsuarioChave=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIOCHAVE",gx.O.AV12cUsuarioChave,0)},c2v:function(){gx.O.AV12cUsuarioChave=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOCHAVE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z219UsuarioNome",gxold:"O219UsuarioNome",gxvar:"A219UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A219UsuarioNome=Value},v2z:function(Value){gx.O.Z219UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(51),gx.O.A219UsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A219UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOPRIVILEGIO",gxz:"Z604UsuarioPrivilegio",gxold:"O604UsuarioPrivilegio",gxvar:"A604UsuarioPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A604UsuarioPrivilegio=Value},v2z:function(Value){gx.O.Z604UsuarioPrivilegio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("USUARIOPRIVILEGIO",row || gx.fn.currentGridRowImpl(51),gx.O.A604UsuarioPrivilegio);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A604UsuarioPrivilegio=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOPRIVILEGIO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:32,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOSENHA",gxz:"Z605UsuarioSenha",gxold:"O605UsuarioSenha",gxvar:"A605UsuarioSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A605UsuarioSenha=Value},v2z:function(Value){gx.O.Z605UsuarioSenha=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOSENHA",row || gx.fn.currentGridRowImpl(51),gx.O.A605UsuarioSenha,0)},c2v:function(){gx.O.A605UsuarioSenha=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOSENHA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOVALIDADESENHA",gxz:"Z607UsuarioValidadeSenha",gxold:"O607UsuarioValidadeSenha",gxvar:"A607UsuarioValidadeSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A607UsuarioValidadeSenha=gx.num.intval(Value)},v2z:function(Value){gx.O.Z607UsuarioValidadeSenha=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("USUARIOVALIDADESENHA",row || gx.fn.currentGridRowImpl(51),gx.O.A607UsuarioValidadeSenha,0)},c2v:function(){gx.O.A607UsuarioValidadeSenha=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("USUARIOVALIDADESENHA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIODATASENHA",gxz:"Z609UsuarioDataSenha",gxold:"O609UsuarioDataSenha",gxvar:"A609UsuarioDataSenha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A609UsuarioDataSenha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z609UsuarioDataSenha=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("USUARIODATASENHA",row || gx.fn.currentGridRowImpl(51),gx.O.A609UsuarioDataSenha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A609UsuarioDataSenha=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("USUARIODATASENHA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOSITUACAO",gxz:"Z612UsuarioSituacao",gxold:"O612UsuarioSituacao",gxvar:"A612UsuarioSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A612UsuarioSituacao=Value},v2z:function(Value){gx.O.Z612UsuarioSituacao=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("USUARIOSITUACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A612UsuarioSituacao,"A");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A612UsuarioSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOSITUACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOSNTLS",gxz:"Z9827UsuarioSnTLS",gxold:"O9827UsuarioSnTLS",gxvar:"A9827UsuarioSnTLS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9827UsuarioSnTLS=Value},v2z:function(Value){gx.O.Z9827UsuarioSnTLS=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOSNTLS",row || gx.fn.currentGridRowImpl(51),gx.O.A9827UsuarioSnTLS,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9827UsuarioSnTLS=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOSNTLS",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cUsuarioId = "" ;
   this.ZV6cUsuarioId = "" ;
   this.OV6cUsuarioId = "" ;
   this.AV7cUsuarioNome = "" ;
   this.ZV7cUsuarioNome = "" ;
   this.OV7cUsuarioNome = "" ;
   this.AV8cUsuarioPrivilegio = "" ;
   this.ZV8cUsuarioPrivilegio = "" ;
   this.OV8cUsuarioPrivilegio = "" ;
   this.AV9cUsuarioSenha = "" ;
   this.ZV9cUsuarioSenha = "" ;
   this.OV9cUsuarioSenha = "" ;
   this.AV10cUsuarioDiretorioRelatorio = "" ;
   this.ZV10cUsuarioDiretorioRelatorio = "" ;
   this.OV10cUsuarioDiretorioRelatorio = "" ;
   this.AV11cUsuarioValidadeSenha = 0 ;
   this.ZV11cUsuarioValidadeSenha = 0 ;
   this.OV11cUsuarioValidadeSenha = 0 ;
   this.AV12cUsuarioChave = "" ;
   this.ZV12cUsuarioChave = "" ;
   this.OV12cUsuarioChave = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.Z219UsuarioNome = "" ;
   this.O219UsuarioNome = "" ;
   this.Z604UsuarioPrivilegio = "" ;
   this.O604UsuarioPrivilegio = "" ;
   this.Z605UsuarioSenha = "" ;
   this.O605UsuarioSenha = "" ;
   this.Z607UsuarioValidadeSenha = 0 ;
   this.O607UsuarioValidadeSenha = 0 ;
   this.Z609UsuarioDataSenha = gx.date.nullDate() ;
   this.O609UsuarioDataSenha = gx.date.nullDate() ;
   this.Z612UsuarioSituacao = "" ;
   this.O612UsuarioSituacao = "" ;
   this.Z9827UsuarioSnTLS = "" ;
   this.O9827UsuarioSnTLS = "" ;
   this.AV6cUsuarioId = "" ;
   this.AV7cUsuarioNome = "" ;
   this.AV8cUsuarioPrivilegio = "" ;
   this.AV9cUsuarioSenha = "" ;
   this.AV10cUsuarioDiretorioRelatorio = "" ;
   this.AV11cUsuarioValidadeSenha = 0 ;
   this.AV12cUsuarioChave = "" ;
   this.AV13pUsuarioId = "" ;
   this.A608UsuarioChave = "" ;
   this.A606UsuarioDiretorioRelatorio = "" ;
   this.AV5LinkSelection = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A604UsuarioPrivilegio = "" ;
   this.A605UsuarioSenha = "" ;
   this.A607UsuarioValidadeSenha = 0 ;
   this.A609UsuarioDataSenha = gx.date.nullDate() ;
   this.A612UsuarioSituacao = "" ;
   this.A9827UsuarioSnTLS = "" ;
   this.Events = {"e131jc2_client": ["ENTER", true] ,"e141jc1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioId',fld:'vCUSUARIOID'},{av:'AV7cUsuarioNome',fld:'vCUSUARIONOME'},{av:'AV8cUsuarioPrivilegio',fld:'vCUSUARIOPRIVILEGIO'},{av:'AV9cUsuarioSenha',fld:'vCUSUARIOSENHA'},{av:'AV10cUsuarioDiretorioRelatorio',fld:'vCUSUARIODIRETORIORELATORIO'},{av:'AV11cUsuarioValidadeSenha',fld:'vCUSUARIOVALIDADESENHA'},{av:'AV12cUsuarioChave',fld:'vCUSUARIOCHAVE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A75UsuarioId',fld:'USUARIOID'}],[{av:'AV13pUsuarioId',fld:'vPUSUARIOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioId',fld:'vCUSUARIOID'},{av:'AV7cUsuarioNome',fld:'vCUSUARIONOME'},{av:'AV8cUsuarioPrivilegio',fld:'vCUSUARIOPRIVILEGIO'},{av:'AV9cUsuarioSenha',fld:'vCUSUARIOSENHA'},{av:'AV10cUsuarioDiretorioRelatorio',fld:'vCUSUARIODIRETORIORELATORIO'},{av:'AV11cUsuarioValidadeSenha',fld:'vCUSUARIOVALIDADESENHA'},{av:'AV12cUsuarioChave',fld:'vCUSUARIOCHAVE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioId',fld:'vCUSUARIOID'},{av:'AV7cUsuarioNome',fld:'vCUSUARIONOME'},{av:'AV8cUsuarioPrivilegio',fld:'vCUSUARIOPRIVILEGIO'},{av:'AV9cUsuarioSenha',fld:'vCUSUARIOSENHA'},{av:'AV10cUsuarioDiretorioRelatorio',fld:'vCUSUARIODIRETORIORELATORIO'},{av:'AV11cUsuarioValidadeSenha',fld:'vCUSUARIOVALIDADESENHA'},{av:'AV12cUsuarioChave',fld:'vCUSUARIOCHAVE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioId',fld:'vCUSUARIOID'},{av:'AV7cUsuarioNome',fld:'vCUSUARIONOME'},{av:'AV8cUsuarioPrivilegio',fld:'vCUSUARIOPRIVILEGIO'},{av:'AV9cUsuarioSenha',fld:'vCUSUARIOSENHA'},{av:'AV10cUsuarioDiretorioRelatorio',fld:'vCUSUARIODIRETORIORELATORIO'},{av:'AV11cUsuarioValidadeSenha',fld:'vCUSUARIOVALIDADESENHA'},{av:'AV12cUsuarioChave',fld:'vCUSUARIOCHAVE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioId',fld:'vCUSUARIOID'},{av:'AV7cUsuarioNome',fld:'vCUSUARIONOME'},{av:'AV8cUsuarioPrivilegio',fld:'vCUSUARIOPRIVILEGIO'},{av:'AV9cUsuarioSenha',fld:'vCUSUARIOSENHA'},{av:'AV10cUsuarioDiretorioRelatorio',fld:'vCUSUARIODIRETORIORELATORIO'},{av:'AV11cUsuarioValidadeSenha',fld:'vCUSUARIOVALIDADESENHA'},{av:'AV12cUsuarioChave',fld:'vCUSUARIOCHAVE'}],[]];
   this.setVCMap("AV13pUsuarioId", "vPUSUARIOID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0220());
