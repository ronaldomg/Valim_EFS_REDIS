/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:57.20
*/
gx.evt.autoSkip = false;
gx.define('gx09m0', false, function () {
   this.ServerClass =  "gx09m0" ;
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
      this.AV13pParametroConsultaEmpresaId=gx.fn.getControlValue("vPPARAMETROCONSULTAEMPRESAID") ;
      this.AV14pParametroConsultaCodigo=gx.fn.getIntegerValue("vPPARAMETROCONSULTACODIGO",'.') ;
   };
   this.Validv_Cparametroconsultatabela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCPARAMETROCONSULTATABELA");
         this.AnyError  = 0;
         if ( ! ( this.AV9cParametroConsultaTabela == 0 || (0==this.AV9cParametroConsultaTabela) ) )
         {
            try {
               gxballoon.setError("Campo cParametroConsultaTabela fora do intervalo");
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
   this.e131o32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141o31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09m0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3227,53,"PARAMETROCONSULTAEMPRESAID","Empresa","","ParametroConsultaEmpresaId","char",0,"px",10,10,"left",null,[],3227,"ParametroConsultaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3228,54,"PARAMETROCONSULTACODIGO","Código","","ParametroConsultaCodigo","int",0,"px",4,4,"right",null,[],3228,"ParametroConsultaCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3215,55,"PARAMETROCONSULTADESCRICAO","Descrição","Selecionar","ParametroConsultaDescricao","svchar",0,"px",30,30,"left",null,[],3215,"ParametroConsultaDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3216,56,"PARAMETROCONSULTATABELA","Tabela","ParametroConsultaTabela","int",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(3217,57,"PARAMETROCONSULTAPRIORDENACAO","Primeira Ordenação","","ParametroConsultaPriOrdenacao","char",0,"px",40,40,"left",null,[],3217,"ParametroConsultaPriOrdenacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3221,58,"PARAMETROCONSULTASNBARIGUAL","Filtrar Código Barras Igual","","ParametroConsultaSNBarIgual","char",0,"px",1,1,"left",null,[],3221,"ParametroConsultaSNBarIgual",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPARAMETROCONSULTAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARAMETROCONSULTAEMPRESAID",gxz:"ZV6cParametroConsultaEmpresaId",gxold:"OV6cParametroConsultaEmpresaId",gxvar:"AV6cParametroConsultaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cParametroConsultaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cParametroConsultaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPARAMETROCONSULTAEMPRESAID",gx.O.AV6cParametroConsultaEmpresaId,0)},c2v:function(){gx.O.AV6cParametroConsultaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPARAMETROCONSULTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPARAMETROCONSULTACODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARAMETROCONSULTACODIGO",gxz:"ZV7cParametroConsultaCodigo",gxold:"OV7cParametroConsultaCodigo",gxvar:"AV7cParametroConsultaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cParametroConsultaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cParametroConsultaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPARAMETROCONSULTACODIGO",gx.O.AV7cParametroConsultaCodigo,0)},c2v:function(){gx.O.AV7cParametroConsultaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPARAMETROCONSULTACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPARAMETROCONSULTADESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARAMETROCONSULTADESCRICAO",gxz:"ZV8cParametroConsultaDescricao",gxold:"OV8cParametroConsultaDescricao",gxvar:"AV8cParametroConsultaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cParametroConsultaDescricao=Value},v2z:function(Value){gx.O.ZV8cParametroConsultaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCPARAMETROCONSULTADESCRICAO",gx.O.AV8cParametroConsultaDescricao,0)},c2v:function(){gx.O.AV8cParametroConsultaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCPARAMETROCONSULTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPARAMETROCONSULTATABELA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cparametroconsultatabela,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARAMETROCONSULTATABELA",gxz:"ZV9cParametroConsultaTabela",gxold:"OV9cParametroConsultaTabela",gxvar:"AV9cParametroConsultaTabela",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cParametroConsultaTabela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cParametroConsultaTabela=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCPARAMETROCONSULTATABELA",gx.O.AV9cParametroConsultaTabela)},c2v:function(){gx.O.AV9cParametroConsultaTabela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPARAMETROCONSULTATABELA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPARAMETROCONSULTAPRIORDENACAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARAMETROCONSULTAPRIORDENACAO",gxz:"ZV10cParametroConsultaPriOrdenacao",gxold:"OV10cParametroConsultaPriOrdenacao",gxvar:"AV10cParametroConsultaPriOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cParametroConsultaPriOrdenacao=Value},v2z:function(Value){gx.O.ZV10cParametroConsultaPriOrdenacao=Value},v2c:function(){gx.fn.setControlValue("vCPARAMETROCONSULTAPRIORDENACAO",gx.O.AV10cParametroConsultaPriOrdenacao,0)},c2v:function(){gx.O.AV10cParametroConsultaPriOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vCPARAMETROCONSULTAPRIORDENACAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPARAMETROCONSULTASEGORDENACAO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARAMETROCONSULTASEGORDENACAO",gxz:"ZV11cParametroConsultaSegOrdenacao",gxold:"OV11cParametroConsultaSegOrdenacao",gxvar:"AV11cParametroConsultaSegOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cParametroConsultaSegOrdenacao=Value},v2z:function(Value){gx.O.ZV11cParametroConsultaSegOrdenacao=Value},v2c:function(){gx.fn.setControlValue("vCPARAMETROCONSULTASEGORDENACAO",gx.O.AV11cParametroConsultaSegOrdenacao,0)},c2v:function(){gx.O.AV11cParametroConsultaSegOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vCPARAMETROCONSULTASEGORDENACAO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPARAMETROCONSULTATERORDENACAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARAMETROCONSULTATERORDENACAO",gxz:"ZV12cParametroConsultaTerOrdenacao",gxold:"OV12cParametroConsultaTerOrdenacao",gxvar:"AV12cParametroConsultaTerOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cParametroConsultaTerOrdenacao=Value},v2z:function(Value){gx.O.ZV12cParametroConsultaTerOrdenacao=Value},v2c:function(){gx.fn.setControlValue("vCPARAMETROCONSULTATERORDENACAO",gx.O.AV12cParametroConsultaTerOrdenacao,0)},c2v:function(){gx.O.AV12cParametroConsultaTerOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vCPARAMETROCONSULTATERORDENACAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTAEMPRESAID",gxz:"Z3227ParametroConsultaEmpresaId",gxold:"O3227ParametroConsultaEmpresaId",gxvar:"A3227ParametroConsultaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3227ParametroConsultaEmpresaId=Value},v2z:function(Value){gx.O.Z3227ParametroConsultaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3227ParametroConsultaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3227ParametroConsultaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTACODIGO",gxz:"Z3228ParametroConsultaCodigo",gxold:"O3228ParametroConsultaCodigo",gxvar:"A3228ParametroConsultaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3228ParametroConsultaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3228ParametroConsultaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTACODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A3228ParametroConsultaCodigo,0)},c2v:function(){gx.O.A3228ParametroConsultaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROCONSULTACODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTADESCRICAO",gxz:"Z3215ParametroConsultaDescricao",gxold:"O3215ParametroConsultaDescricao",gxvar:"A3215ParametroConsultaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3215ParametroConsultaDescricao=Value},v2z:function(Value){gx.O.Z3215ParametroConsultaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A3215ParametroConsultaDescricao,0)},c2v:function(){gx.O.A3215ParametroConsultaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTATABELA",gxz:"Z3216ParametroConsultaTabela",gxold:"O3216ParametroConsultaTabela",gxvar:"A3216ParametroConsultaTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3216ParametroConsultaTabela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3216ParametroConsultaTabela=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("PARAMETROCONSULTATABELA",row || gx.fn.currentGridRowImpl(51),gx.O.A3216ParametroConsultaTabela);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3216ParametroConsultaTabela=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROCONSULTATABELA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTAPRIORDENACAO",gxz:"Z3217ParametroConsultaPriOrdenacao",gxold:"O3217ParametroConsultaPriOrdenacao",gxvar:"A3217ParametroConsultaPriOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3217ParametroConsultaPriOrdenacao=Value},v2z:function(Value){gx.O.Z3217ParametroConsultaPriOrdenacao=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTAPRIORDENACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A3217ParametroConsultaPriOrdenacao,0)},c2v:function(){gx.O.A3217ParametroConsultaPriOrdenacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTAPRIORDENACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROCONSULTASNBARIGUAL",gxz:"Z3221ParametroConsultaSNBarIgual",gxold:"O3221ParametroConsultaSNBarIgual",gxvar:"A3221ParametroConsultaSNBarIgual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3221ParametroConsultaSNBarIgual=Value},v2z:function(Value){gx.O.Z3221ParametroConsultaSNBarIgual=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROCONSULTASNBARIGUAL",row || gx.fn.currentGridRowImpl(51),gx.O.A3221ParametroConsultaSNBarIgual,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3221ParametroConsultaSNBarIgual=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROCONSULTASNBARIGUAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cParametroConsultaEmpresaId = "" ;
   this.ZV6cParametroConsultaEmpresaId = "" ;
   this.OV6cParametroConsultaEmpresaId = "" ;
   this.AV7cParametroConsultaCodigo = 0 ;
   this.ZV7cParametroConsultaCodigo = 0 ;
   this.OV7cParametroConsultaCodigo = 0 ;
   this.AV8cParametroConsultaDescricao = "" ;
   this.ZV8cParametroConsultaDescricao = "" ;
   this.OV8cParametroConsultaDescricao = "" ;
   this.AV9cParametroConsultaTabela = 0 ;
   this.ZV9cParametroConsultaTabela = 0 ;
   this.OV9cParametroConsultaTabela = 0 ;
   this.AV10cParametroConsultaPriOrdenacao = "" ;
   this.ZV10cParametroConsultaPriOrdenacao = "" ;
   this.OV10cParametroConsultaPriOrdenacao = "" ;
   this.AV11cParametroConsultaSegOrdenacao = "" ;
   this.ZV11cParametroConsultaSegOrdenacao = "" ;
   this.OV11cParametroConsultaSegOrdenacao = "" ;
   this.AV12cParametroConsultaTerOrdenacao = "" ;
   this.ZV12cParametroConsultaTerOrdenacao = "" ;
   this.OV12cParametroConsultaTerOrdenacao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3227ParametroConsultaEmpresaId = "" ;
   this.O3227ParametroConsultaEmpresaId = "" ;
   this.Z3228ParametroConsultaCodigo = 0 ;
   this.O3228ParametroConsultaCodigo = 0 ;
   this.Z3215ParametroConsultaDescricao = "" ;
   this.O3215ParametroConsultaDescricao = "" ;
   this.Z3216ParametroConsultaTabela = 0 ;
   this.O3216ParametroConsultaTabela = 0 ;
   this.Z3217ParametroConsultaPriOrdenacao = "" ;
   this.O3217ParametroConsultaPriOrdenacao = "" ;
   this.Z3221ParametroConsultaSNBarIgual = "" ;
   this.O3221ParametroConsultaSNBarIgual = "" ;
   this.AV6cParametroConsultaEmpresaId = "" ;
   this.AV7cParametroConsultaCodigo = 0 ;
   this.AV8cParametroConsultaDescricao = "" ;
   this.AV9cParametroConsultaTabela = 0 ;
   this.AV10cParametroConsultaPriOrdenacao = "" ;
   this.AV11cParametroConsultaSegOrdenacao = "" ;
   this.AV12cParametroConsultaTerOrdenacao = "" ;
   this.AV13pParametroConsultaEmpresaId = "" ;
   this.AV14pParametroConsultaCodigo = 0 ;
   this.A3219ParametroConsultaTerOrdenacao = "" ;
   this.A3218ParametroConsultaSegOrdenacao = "" ;
   this.AV5LinkSelection = "" ;
   this.A3227ParametroConsultaEmpresaId = "" ;
   this.A3228ParametroConsultaCodigo = 0 ;
   this.A3215ParametroConsultaDescricao = "" ;
   this.A3216ParametroConsultaTabela = 0 ;
   this.A3217ParametroConsultaPriOrdenacao = "" ;
   this.A3221ParametroConsultaSNBarIgual = "" ;
   this.Events = {"e131o32_client": ["ENTER", true] ,"e141o31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParametroConsultaEmpresaId',fld:'vCPARAMETROCONSULTAEMPRESAID'},{av:'AV7cParametroConsultaCodigo',fld:'vCPARAMETROCONSULTACODIGO'},{av:'AV8cParametroConsultaDescricao',fld:'vCPARAMETROCONSULTADESCRICAO'},{av:'AV9cParametroConsultaTabela',fld:'vCPARAMETROCONSULTATABELA'},{av:'AV10cParametroConsultaPriOrdenacao',fld:'vCPARAMETROCONSULTAPRIORDENACAO'},{av:'AV11cParametroConsultaSegOrdenacao',fld:'vCPARAMETROCONSULTASEGORDENACAO'},{av:'AV12cParametroConsultaTerOrdenacao',fld:'vCPARAMETROCONSULTATERORDENACAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'}],[{av:'AV13pParametroConsultaEmpresaId',fld:'vPPARAMETROCONSULTAEMPRESAID'},{av:'AV14pParametroConsultaCodigo',fld:'vPPARAMETROCONSULTACODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParametroConsultaEmpresaId',fld:'vCPARAMETROCONSULTAEMPRESAID'},{av:'AV7cParametroConsultaCodigo',fld:'vCPARAMETROCONSULTACODIGO'},{av:'AV8cParametroConsultaDescricao',fld:'vCPARAMETROCONSULTADESCRICAO'},{av:'AV9cParametroConsultaTabela',fld:'vCPARAMETROCONSULTATABELA'},{av:'AV10cParametroConsultaPriOrdenacao',fld:'vCPARAMETROCONSULTAPRIORDENACAO'},{av:'AV11cParametroConsultaSegOrdenacao',fld:'vCPARAMETROCONSULTASEGORDENACAO'},{av:'AV12cParametroConsultaTerOrdenacao',fld:'vCPARAMETROCONSULTATERORDENACAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParametroConsultaEmpresaId',fld:'vCPARAMETROCONSULTAEMPRESAID'},{av:'AV7cParametroConsultaCodigo',fld:'vCPARAMETROCONSULTACODIGO'},{av:'AV8cParametroConsultaDescricao',fld:'vCPARAMETROCONSULTADESCRICAO'},{av:'AV9cParametroConsultaTabela',fld:'vCPARAMETROCONSULTATABELA'},{av:'AV10cParametroConsultaPriOrdenacao',fld:'vCPARAMETROCONSULTAPRIORDENACAO'},{av:'AV11cParametroConsultaSegOrdenacao',fld:'vCPARAMETROCONSULTASEGORDENACAO'},{av:'AV12cParametroConsultaTerOrdenacao',fld:'vCPARAMETROCONSULTATERORDENACAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParametroConsultaEmpresaId',fld:'vCPARAMETROCONSULTAEMPRESAID'},{av:'AV7cParametroConsultaCodigo',fld:'vCPARAMETROCONSULTACODIGO'},{av:'AV8cParametroConsultaDescricao',fld:'vCPARAMETROCONSULTADESCRICAO'},{av:'AV9cParametroConsultaTabela',fld:'vCPARAMETROCONSULTATABELA'},{av:'AV10cParametroConsultaPriOrdenacao',fld:'vCPARAMETROCONSULTAPRIORDENACAO'},{av:'AV11cParametroConsultaSegOrdenacao',fld:'vCPARAMETROCONSULTASEGORDENACAO'},{av:'AV12cParametroConsultaTerOrdenacao',fld:'vCPARAMETROCONSULTATERORDENACAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParametroConsultaEmpresaId',fld:'vCPARAMETROCONSULTAEMPRESAID'},{av:'AV7cParametroConsultaCodigo',fld:'vCPARAMETROCONSULTACODIGO'},{av:'AV8cParametroConsultaDescricao',fld:'vCPARAMETROCONSULTADESCRICAO'},{av:'AV9cParametroConsultaTabela',fld:'vCPARAMETROCONSULTATABELA'},{av:'AV10cParametroConsultaPriOrdenacao',fld:'vCPARAMETROCONSULTAPRIORDENACAO'},{av:'AV11cParametroConsultaSegOrdenacao',fld:'vCPARAMETROCONSULTASEGORDENACAO'},{av:'AV12cParametroConsultaTerOrdenacao',fld:'vCPARAMETROCONSULTATERORDENACAO'}],[]];
   this.setVCMap("AV13pParametroConsultaEmpresaId", "vPPARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("AV14pParametroConsultaCodigo", "vPPARAMETROCONSULTACODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09m0());
