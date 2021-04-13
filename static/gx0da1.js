/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:52.25
*/
gx.evt.autoSkip = false;
gx.define('gx0da1', false, function () {
   this.ServerClass =  "gx0da1" ;
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
      this.AV12pTransacaoSaidaEmpresaId=gx.fn.getControlValue("vPTRANSACAOSAIDAEMPRESAID") ;
      this.AV13pTransacaoSaidaCodigo=gx.fn.getControlValue("vPTRANSACAOSAIDACODIGO") ;
   };
   this.Validv_Ctransacaosaidatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTRANSACAOSAIDATIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV8cTransacaoSaidaTipo == "1" || this.AV8cTransacaoSaidaTipo == "2" || this.AV8cTransacaoSaidaTipo == "3" || this.AV8cTransacaoSaidaTipo == "4" || this.AV8cTransacaoSaidaTipo == "5" || this.AV8cTransacaoSaidaTipo == "6" || this.AV8cTransacaoSaidaTipo == "7" || this.AV8cTransacaoSaidaTipo == "8" || this.AV8cTransacaoSaidaTipo == "9" || this.AV8cTransacaoSaidaTipo == "10" || this.AV8cTransacaoSaidaTipo == "11" || (""==this.AV8cTransacaoSaidaTipo) ) )
         {
            try {
               gxballoon.setError("Campo cTransacaoSaidaTipo fora do intervalo");
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
   this.e1329t2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1429t1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0da1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5695,48,"TRANSACAOSAIDACODIGO","Código da Transação","","TransacaoSaidaCodigo","char",0,"px",10,10,"left",null,[],5695,"TransacaoSaidaCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5568,49,"TRANSACAOSAIDADESCRICAO","Descrição da Transação","Selecionar","TransacaoSaidaDescricao","svchar",0,"px",30,30,"left",null,[],5568,"TransacaoSaidaDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(5569,50,"TRANSACAOSAIDATIPO","Tipo da Transação de Saída","TransacaoSaidaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(5570,51,"TRANSACAOSAIDATIPOITENS","Modo de Gravação dos Itens","TransacaoSaidaTipoItens","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(5571,52,"TRANSACAOSAIDASNVINCULADO","Lançamento Vinculado","","TransacaoSaidaSnVinculado","char",0,"px",1,1,"left",null,[],5571,"TransacaoSaidaSnVinculado",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5694,53,"TRANSACAOSAIDAEMPRESAID","Empresa da Transação","","TransacaoSaidaEmpresaId","char",0,"px",10,10,"left",null,[],5694,"TransacaoSaidaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSACAOSAIDACODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDACODIGO",gxz:"ZV6cTransacaoSaidaCodigo",gxold:"OV6cTransacaoSaidaCodigo",gxvar:"AV6cTransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransacaoSaidaCodigo=Value},v2z:function(Value){gx.O.ZV6cTransacaoSaidaCodigo=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDACODIGO",gx.O.AV6cTransacaoSaidaCodigo,0)},c2v:function(){gx.O.AV6cTransacaoSaidaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDACODIGO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSACAOSAIDADESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDADESCRICAO",gxz:"ZV7cTransacaoSaidaDescricao",gxold:"OV7cTransacaoSaidaDescricao",gxvar:"AV7cTransacaoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTransacaoSaidaDescricao=Value},v2z:function(Value){gx.O.ZV7cTransacaoSaidaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDADESCRICAO",gx.O.AV7cTransacaoSaidaDescricao,0)},c2v:function(){gx.O.AV7cTransacaoSaidaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOSAIDATIPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctransacaosaidatipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDATIPO",gxz:"ZV8cTransacaoSaidaTipo",gxold:"OV8cTransacaoSaidaTipo",gxvar:"AV8cTransacaoSaidaTipo",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cTransacaoSaidaTipo=Value},v2z:function(Value){gx.O.ZV8cTransacaoSaidaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOSAIDATIPO",gx.O.AV8cTransacaoSaidaTipo)},c2v:function(){gx.O.AV8cTransacaoSaidaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDATIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTRANSACAOSAIDATIPOITENS", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDATIPOITENS",gxz:"ZV9cTransacaoSaidaTipoItens",gxold:"OV9cTransacaoSaidaTipoItens",gxvar:"AV9cTransacaoSaidaTipoItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cTransacaoSaidaTipoItens=Value},v2z:function(Value){gx.O.ZV9cTransacaoSaidaTipoItens=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOSAIDATIPOITENS",gx.O.AV9cTransacaoSaidaTipoItens)},c2v:function(){gx.O.AV9cTransacaoSaidaTipoItens=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDATIPOITENS")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTRANSACAOSAIDASNVINCULADO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDASNVINCULADO",gxz:"ZV10cTransacaoSaidaSnVinculado",gxold:"OV10cTransacaoSaidaSnVinculado",gxvar:"AV10cTransacaoSaidaSnVinculado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTransacaoSaidaSnVinculado=Value},v2z:function(Value){gx.O.ZV10cTransacaoSaidaSnVinculado=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDASNVINCULADO",gx.O.AV10cTransacaoSaidaSnVinculado,0)},c2v:function(){gx.O.AV10cTransacaoSaidaSnVinculado=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDASNVINCULADO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSACAOSAIDASNALTERASALDO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDASNALTERASALDO",gxz:"ZV11cTransacaoSaidaSnAlteraSaldo",gxold:"OV11cTransacaoSaidaSnAlteraSaldo",gxvar:"AV11cTransacaoSaidaSnAlteraSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTransacaoSaidaSnAlteraSaldo=Value},v2z:function(Value){gx.O.ZV11cTransacaoSaidaSnAlteraSaldo=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDASNALTERASALDO",gx.O.AV11cTransacaoSaidaSnAlteraSaldo,0)},c2v:function(){gx.O.AV11cTransacaoSaidaSnAlteraSaldo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDASNALTERASALDO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACODIGO",gxz:"Z5695TransacaoSaidaCodigo",gxold:"O5695TransacaoSaidaCodigo",gxvar:"A5695TransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5695TransacaoSaidaCodigo=Value},v2z:function(Value){gx.O.Z5695TransacaoSaidaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A5695TransacaoSaidaCodigo,0)},c2v:function(){gx.O.A5695TransacaoSaidaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDADESCRICAO",gxz:"Z5568TransacaoSaidaDescricao",gxold:"O5568TransacaoSaidaDescricao",gxvar:"A5568TransacaoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5568TransacaoSaidaDescricao=Value},v2z:function(Value){gx.O.Z5568TransacaoSaidaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A5568TransacaoSaidaDescricao,0)},c2v:function(){gx.O.A5568TransacaoSaidaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDATIPO",gxz:"Z5569TransacaoSaidaTipo",gxold:"O5569TransacaoSaidaTipo",gxvar:"A5569TransacaoSaidaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5569TransacaoSaidaTipo=Value},v2z:function(Value){gx.O.Z5569TransacaoSaidaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A5569TransacaoSaidaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5569TransacaoSaidaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDATIPOITENS",gxz:"Z5570TransacaoSaidaTipoItens",gxold:"O5570TransacaoSaidaTipoItens",gxvar:"A5570TransacaoSaidaTipoItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5570TransacaoSaidaTipoItens=Value},v2z:function(Value){gx.O.Z5570TransacaoSaidaTipoItens=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOSAIDATIPOITENS",row || gx.fn.currentGridRowImpl(46),gx.O.A5570TransacaoSaidaTipoItens)},c2v:function(){gx.O.A5570TransacaoSaidaTipoItens=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDATIPOITENS",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDASNVINCULADO",gxz:"Z5571TransacaoSaidaSnVinculado",gxold:"O5571TransacaoSaidaSnVinculado",gxvar:"A5571TransacaoSaidaSnVinculado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5571TransacaoSaidaSnVinculado=Value},v2z:function(Value){gx.O.Z5571TransacaoSaidaSnVinculado=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDASNVINCULADO",row || gx.fn.currentGridRowImpl(46),gx.O.A5571TransacaoSaidaSnVinculado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5571TransacaoSaidaSnVinculado=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDASNVINCULADO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDAEMPRESAID",gxz:"Z5694TransacaoSaidaEmpresaId",gxold:"O5694TransacaoSaidaEmpresaId",gxvar:"A5694TransacaoSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5694TransacaoSaidaEmpresaId=Value},v2z:function(Value){gx.O.Z5694TransacaoSaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A5694TransacaoSaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5694TransacaoSaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cTransacaoSaidaCodigo = "" ;
   this.ZV6cTransacaoSaidaCodigo = "" ;
   this.OV6cTransacaoSaidaCodigo = "" ;
   this.AV7cTransacaoSaidaDescricao = "" ;
   this.ZV7cTransacaoSaidaDescricao = "" ;
   this.OV7cTransacaoSaidaDescricao = "" ;
   this.AV8cTransacaoSaidaTipo = "" ;
   this.ZV8cTransacaoSaidaTipo = "" ;
   this.OV8cTransacaoSaidaTipo = "" ;
   this.AV9cTransacaoSaidaTipoItens = "" ;
   this.ZV9cTransacaoSaidaTipoItens = "" ;
   this.OV9cTransacaoSaidaTipoItens = "" ;
   this.AV10cTransacaoSaidaSnVinculado = "" ;
   this.ZV10cTransacaoSaidaSnVinculado = "" ;
   this.OV10cTransacaoSaidaSnVinculado = "" ;
   this.AV11cTransacaoSaidaSnAlteraSaldo = "" ;
   this.ZV11cTransacaoSaidaSnAlteraSaldo = "" ;
   this.OV11cTransacaoSaidaSnAlteraSaldo = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5695TransacaoSaidaCodigo = "" ;
   this.O5695TransacaoSaidaCodigo = "" ;
   this.Z5568TransacaoSaidaDescricao = "" ;
   this.O5568TransacaoSaidaDescricao = "" ;
   this.Z5569TransacaoSaidaTipo = "" ;
   this.O5569TransacaoSaidaTipo = "" ;
   this.Z5570TransacaoSaidaTipoItens = "" ;
   this.O5570TransacaoSaidaTipoItens = "" ;
   this.Z5571TransacaoSaidaSnVinculado = "" ;
   this.O5571TransacaoSaidaSnVinculado = "" ;
   this.Z5694TransacaoSaidaEmpresaId = "" ;
   this.O5694TransacaoSaidaEmpresaId = "" ;
   this.AV6cTransacaoSaidaCodigo = "" ;
   this.AV7cTransacaoSaidaDescricao = "" ;
   this.AV8cTransacaoSaidaTipo = "" ;
   this.AV9cTransacaoSaidaTipoItens = "" ;
   this.AV10cTransacaoSaidaSnVinculado = "" ;
   this.AV11cTransacaoSaidaSnAlteraSaldo = "" ;
   this.AV12pTransacaoSaidaEmpresaId = "" ;
   this.AV13pTransacaoSaidaCodigo = "" ;
   this.A5572TransacaoSaidaSnAlteraSaldo = "" ;
   this.AV5LinkSelection = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5568TransacaoSaidaDescricao = "" ;
   this.A5569TransacaoSaidaTipo = "" ;
   this.A5570TransacaoSaidaTipoItens = "" ;
   this.A5571TransacaoSaidaSnVinculado = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.Events = {"e1329t2_client": ["ENTER", true] ,"e1429t1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV7cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV8cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV9cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV10cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV11cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'},{av:'AV12pTransacaoSaidaEmpresaId',fld:'vPTRANSACAOSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'}],[{av:'AV13pTransacaoSaidaCodigo',fld:'vPTRANSACAOSAIDACODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV7cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV8cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV9cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV10cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV11cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'},{av:'AV12pTransacaoSaidaEmpresaId',fld:'vPTRANSACAOSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV7cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV8cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV9cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV10cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV11cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'},{av:'AV12pTransacaoSaidaEmpresaId',fld:'vPTRANSACAOSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV7cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV8cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV9cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV10cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV11cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'},{av:'AV12pTransacaoSaidaEmpresaId',fld:'vPTRANSACAOSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV7cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV8cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV9cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV10cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV11cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'},{av:'AV12pTransacaoSaidaEmpresaId',fld:'vPTRANSACAOSAIDAEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pTransacaoSaidaEmpresaId", "vPTRANSACAOSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV13pTransacaoSaidaCodigo", "vPTRANSACAOSAIDACODIGO", 0, "char");
   this.setVCMap("AV12pTransacaoSaidaEmpresaId", "vPTRANSACAOSAIDAEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pTransacaoSaidaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0da1());
