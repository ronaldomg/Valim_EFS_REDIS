/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:38:8.1
*/
gx.evt.autoSkip = false;
gx.define('gx0da0', false, function () {
   this.ServerClass =  "gx0da0" ;
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
      this.AV13pTransacaoSaidaEmpresaId=gx.fn.getControlValue("vPTRANSACAOSAIDAEMPRESAID") ;
      this.AV14pTransacaoSaidaCodigo=gx.fn.getControlValue("vPTRANSACAOSAIDACODIGO") ;
   };
   this.Validv_Ctransacaosaidatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTRANSACAOSAIDATIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV9cTransacaoSaidaTipo == "1" || this.AV9cTransacaoSaidaTipo == "2" || this.AV9cTransacaoSaidaTipo == "3" || this.AV9cTransacaoSaidaTipo == "4" || this.AV9cTransacaoSaidaTipo == "5" || this.AV9cTransacaoSaidaTipo == "6" || this.AV9cTransacaoSaidaTipo == "7" || this.AV9cTransacaoSaidaTipo == "8" || this.AV9cTransacaoSaidaTipo == "9" || this.AV9cTransacaoSaidaTipo == "10" || this.AV9cTransacaoSaidaTipo == "11" || (""==this.AV9cTransacaoSaidaTipo) ) )
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
   this.e131s92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141s91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0da0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5694,53,"TRANSACAOSAIDAEMPRESAID","Empresa da Transação","","TransacaoSaidaEmpresaId","char",0,"px",10,10,"left",null,[],5694,"TransacaoSaidaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5695,54,"TRANSACAOSAIDACODIGO","Código da Transação","","TransacaoSaidaCodigo","char",0,"px",10,10,"left",null,[],5695,"TransacaoSaidaCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5568,55,"TRANSACAOSAIDADESCRICAO","Descrição da Transação","Selecionar","TransacaoSaidaDescricao","svchar",0,"px",30,30,"left",null,[],5568,"TransacaoSaidaDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(5569,56,"TRANSACAOSAIDATIPO","Tipo da Transação de Saída","TransacaoSaidaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(5570,57,"TRANSACAOSAIDATIPOITENS","Modo de Gravação dos Itens","TransacaoSaidaTipoItens","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSACAOSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDAEMPRESAID",gxz:"ZV6cTransacaoSaidaEmpresaId",gxold:"OV6cTransacaoSaidaEmpresaId",gxvar:"AV6cTransacaoSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransacaoSaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTransacaoSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDAEMPRESAID",gx.O.AV6cTransacaoSaidaEmpresaId,0)},c2v:function(){gx.O.AV6cTransacaoSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSACAOSAIDACODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDACODIGO",gxz:"ZV7cTransacaoSaidaCodigo",gxold:"OV7cTransacaoSaidaCodigo",gxvar:"AV7cTransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTransacaoSaidaCodigo=Value},v2z:function(Value){gx.O.ZV7cTransacaoSaidaCodigo=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDACODIGO",gx.O.AV7cTransacaoSaidaCodigo,0)},c2v:function(){gx.O.AV7cTransacaoSaidaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDACODIGO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOSAIDADESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDADESCRICAO",gxz:"ZV8cTransacaoSaidaDescricao",gxold:"OV8cTransacaoSaidaDescricao",gxvar:"AV8cTransacaoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransacaoSaidaDescricao=Value},v2z:function(Value){gx.O.ZV8cTransacaoSaidaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDADESCRICAO",gx.O.AV8cTransacaoSaidaDescricao,0)},c2v:function(){gx.O.AV8cTransacaoSaidaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTRANSACAOSAIDATIPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctransacaosaidatipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDATIPO",gxz:"ZV9cTransacaoSaidaTipo",gxold:"OV9cTransacaoSaidaTipo",gxvar:"AV9cTransacaoSaidaTipo",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cTransacaoSaidaTipo=Value},v2z:function(Value){gx.O.ZV9cTransacaoSaidaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOSAIDATIPO",gx.O.AV9cTransacaoSaidaTipo)},c2v:function(){gx.O.AV9cTransacaoSaidaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDATIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTRANSACAOSAIDATIPOITENS", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDATIPOITENS",gxz:"ZV10cTransacaoSaidaTipoItens",gxold:"OV10cTransacaoSaidaTipoItens",gxvar:"AV10cTransacaoSaidaTipoItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cTransacaoSaidaTipoItens=Value},v2z:function(Value){gx.O.ZV10cTransacaoSaidaTipoItens=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOSAIDATIPOITENS",gx.O.AV10cTransacaoSaidaTipoItens)},c2v:function(){gx.O.AV10cTransacaoSaidaTipoItens=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDATIPOITENS")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSACAOSAIDASNVINCULADO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDASNVINCULADO",gxz:"ZV11cTransacaoSaidaSnVinculado",gxold:"OV11cTransacaoSaidaSnVinculado",gxvar:"AV11cTransacaoSaidaSnVinculado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTransacaoSaidaSnVinculado=Value},v2z:function(Value){gx.O.ZV11cTransacaoSaidaSnVinculado=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDASNVINCULADO",gx.O.AV11cTransacaoSaidaSnVinculado,0)},c2v:function(){gx.O.AV11cTransacaoSaidaSnVinculado=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDASNVINCULADO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTRANSACAOSAIDASNALTERASALDO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOSAIDASNALTERASALDO",gxz:"ZV12cTransacaoSaidaSnAlteraSaldo",gxold:"OV12cTransacaoSaidaSnAlteraSaldo",gxvar:"AV12cTransacaoSaidaSnAlteraSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTransacaoSaidaSnAlteraSaldo=Value},v2z:function(Value){gx.O.ZV12cTransacaoSaidaSnAlteraSaldo=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOSAIDASNALTERASALDO",gx.O.AV12cTransacaoSaidaSnAlteraSaldo,0)},c2v:function(){gx.O.AV12cTransacaoSaidaSnAlteraSaldo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOSAIDASNALTERASALDO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDAEMPRESAID",gxz:"Z5694TransacaoSaidaEmpresaId",gxold:"O5694TransacaoSaidaEmpresaId",gxvar:"A5694TransacaoSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5694TransacaoSaidaEmpresaId=Value},v2z:function(Value){gx.O.Z5694TransacaoSaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A5694TransacaoSaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5694TransacaoSaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACODIGO",gxz:"Z5695TransacaoSaidaCodigo",gxold:"O5695TransacaoSaidaCodigo",gxvar:"A5695TransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5695TransacaoSaidaCodigo=Value},v2z:function(Value){gx.O.Z5695TransacaoSaidaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A5695TransacaoSaidaCodigo,0)},c2v:function(){gx.O.A5695TransacaoSaidaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDADESCRICAO",gxz:"Z5568TransacaoSaidaDescricao",gxold:"O5568TransacaoSaidaDescricao",gxvar:"A5568TransacaoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5568TransacaoSaidaDescricao=Value},v2z:function(Value){gx.O.Z5568TransacaoSaidaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A5568TransacaoSaidaDescricao,0)},c2v:function(){gx.O.A5568TransacaoSaidaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDATIPO",gxz:"Z5569TransacaoSaidaTipo",gxold:"O5569TransacaoSaidaTipo",gxvar:"A5569TransacaoSaidaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5569TransacaoSaidaTipo=Value},v2z:function(Value){gx.O.Z5569TransacaoSaidaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A5569TransacaoSaidaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5569TransacaoSaidaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDATIPOITENS",gxz:"Z5570TransacaoSaidaTipoItens",gxold:"O5570TransacaoSaidaTipoItens",gxvar:"A5570TransacaoSaidaTipoItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5570TransacaoSaidaTipoItens=Value},v2z:function(Value){gx.O.Z5570TransacaoSaidaTipoItens=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOSAIDATIPOITENS",row || gx.fn.currentGridRowImpl(51),gx.O.A5570TransacaoSaidaTipoItens)},c2v:function(){gx.O.A5570TransacaoSaidaTipoItens=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDATIPOITENS",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cTransacaoSaidaEmpresaId = "" ;
   this.ZV6cTransacaoSaidaEmpresaId = "" ;
   this.OV6cTransacaoSaidaEmpresaId = "" ;
   this.AV7cTransacaoSaidaCodigo = "" ;
   this.ZV7cTransacaoSaidaCodigo = "" ;
   this.OV7cTransacaoSaidaCodigo = "" ;
   this.AV8cTransacaoSaidaDescricao = "" ;
   this.ZV8cTransacaoSaidaDescricao = "" ;
   this.OV8cTransacaoSaidaDescricao = "" ;
   this.AV9cTransacaoSaidaTipo = "" ;
   this.ZV9cTransacaoSaidaTipo = "" ;
   this.OV9cTransacaoSaidaTipo = "" ;
   this.AV10cTransacaoSaidaTipoItens = "" ;
   this.ZV10cTransacaoSaidaTipoItens = "" ;
   this.OV10cTransacaoSaidaTipoItens = "" ;
   this.AV11cTransacaoSaidaSnVinculado = "" ;
   this.ZV11cTransacaoSaidaSnVinculado = "" ;
   this.OV11cTransacaoSaidaSnVinculado = "" ;
   this.AV12cTransacaoSaidaSnAlteraSaldo = "" ;
   this.ZV12cTransacaoSaidaSnAlteraSaldo = "" ;
   this.OV12cTransacaoSaidaSnAlteraSaldo = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5694TransacaoSaidaEmpresaId = "" ;
   this.O5694TransacaoSaidaEmpresaId = "" ;
   this.Z5695TransacaoSaidaCodigo = "" ;
   this.O5695TransacaoSaidaCodigo = "" ;
   this.Z5568TransacaoSaidaDescricao = "" ;
   this.O5568TransacaoSaidaDescricao = "" ;
   this.Z5569TransacaoSaidaTipo = "" ;
   this.O5569TransacaoSaidaTipo = "" ;
   this.Z5570TransacaoSaidaTipoItens = "" ;
   this.O5570TransacaoSaidaTipoItens = "" ;
   this.AV6cTransacaoSaidaEmpresaId = "" ;
   this.AV7cTransacaoSaidaCodigo = "" ;
   this.AV8cTransacaoSaidaDescricao = "" ;
   this.AV9cTransacaoSaidaTipo = "" ;
   this.AV10cTransacaoSaidaTipoItens = "" ;
   this.AV11cTransacaoSaidaSnVinculado = "" ;
   this.AV12cTransacaoSaidaSnAlteraSaldo = "" ;
   this.AV13pTransacaoSaidaEmpresaId = "" ;
   this.AV14pTransacaoSaidaCodigo = "" ;
   this.A5572TransacaoSaidaSnAlteraSaldo = "" ;
   this.A5571TransacaoSaidaSnVinculado = "" ;
   this.AV5LinkSelection = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5568TransacaoSaidaDescricao = "" ;
   this.A5569TransacaoSaidaTipo = "" ;
   this.A5570TransacaoSaidaTipoItens = "" ;
   this.Events = {"e131s92_client": ["ENTER", true] ,"e141s91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaEmpresaId',fld:'vCTRANSACAOSAIDAEMPRESAID'},{av:'AV7cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV8cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV9cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV10cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV11cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV12cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'}],[{av:'AV13pTransacaoSaidaEmpresaId',fld:'vPTRANSACAOSAIDAEMPRESAID'},{av:'AV14pTransacaoSaidaCodigo',fld:'vPTRANSACAOSAIDACODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaEmpresaId',fld:'vCTRANSACAOSAIDAEMPRESAID'},{av:'AV7cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV8cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV9cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV10cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV11cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV12cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaEmpresaId',fld:'vCTRANSACAOSAIDAEMPRESAID'},{av:'AV7cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV8cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV9cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV10cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV11cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV12cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaEmpresaId',fld:'vCTRANSACAOSAIDAEMPRESAID'},{av:'AV7cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV8cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV9cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV10cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV11cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV12cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoSaidaEmpresaId',fld:'vCTRANSACAOSAIDAEMPRESAID'},{av:'AV7cTransacaoSaidaCodigo',fld:'vCTRANSACAOSAIDACODIGO'},{av:'AV8cTransacaoSaidaDescricao',fld:'vCTRANSACAOSAIDADESCRICAO'},{av:'AV9cTransacaoSaidaTipo',fld:'vCTRANSACAOSAIDATIPO'},{av:'AV10cTransacaoSaidaTipoItens',fld:'vCTRANSACAOSAIDATIPOITENS'},{av:'AV11cTransacaoSaidaSnVinculado',fld:'vCTRANSACAOSAIDASNVINCULADO'},{av:'AV12cTransacaoSaidaSnAlteraSaldo',fld:'vCTRANSACAOSAIDASNALTERASALDO'}],[]];
   this.setVCMap("AV13pTransacaoSaidaEmpresaId", "vPTRANSACAOSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14pTransacaoSaidaCodigo", "vPTRANSACAOSAIDACODIGO", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0da0());
