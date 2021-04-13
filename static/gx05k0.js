/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:29:21.62
*/
gx.evt.autoSkip = false;
gx.define('gx05k0', false, function () {
   this.ServerClass =  "gx05k0" ;
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
      this.AV13pEmpresaEtiquetaEmpresaId=gx.fn.getControlValue("vPEMPRESAETIQUETAEMPRESAID") ;
      this.AV14pEtiquetaCodigo=gx.fn.getIntegerValue("vPETIQUETACODIGO",'.') ;
      this.AV15pEtiquetaLinhaCod=gx.fn.getIntegerValue("vPETIQUETALINHACOD",'.') ;
   };
   this.Validv_Cetiquetalinhatamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCETIQUETALINHATAMFONTE");
         this.AnyError  = 0;
         if ( ! ( this.AV9cEtiquetaLinhaTamFonte == 1 || this.AV9cEtiquetaLinhaTamFonte == 0 || this.AV9cEtiquetaLinhaTamFonte == 8 || this.AV9cEtiquetaLinhaTamFonte == 9 || this.AV9cEtiquetaLinhaTamFonte == 10 || this.AV9cEtiquetaLinhaTamFonte == 11 || this.AV9cEtiquetaLinhaTamFonte == 12 || this.AV9cEtiquetaLinhaTamFonte == 14 || this.AV9cEtiquetaLinhaTamFonte == 16 || this.AV9cEtiquetaLinhaTamFonte == 58 || this.AV9cEtiquetaLinhaTamFonte == 59 || this.AV9cEtiquetaLinhaTamFonte == 60 || this.AV9cEtiquetaLinhaTamFonte == 61 || this.AV9cEtiquetaLinhaTamFonte == 62 || this.AV9cEtiquetaLinhaTamFonte == 64 || this.AV9cEtiquetaLinhaTamFonte == 66 || this.AV9cEtiquetaLinhaTamFonte == 70 || this.AV9cEtiquetaLinhaTamFonte == 67 || this.AV9cEtiquetaLinhaTamFonte == 68 || this.AV9cEtiquetaLinhaTamFonte == 69 || this.AV9cEtiquetaLinhaTamFonte == 75 || (0==this.AV9cEtiquetaLinhaTamFonte) ) )
         {
            try {
               gxballoon.setError("Campo cEtiquetaLinhaTamFonte fora do intervalo");
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
   this.e131lk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141lk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx05k0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(240,53,"EMPRESAETIQUETAEMPRESAID","Empresa Etiqueta Empresa Id","","EmpresaEtiquetaEmpresaId","char",0,"px",10,10,"left",null,[],240,"EmpresaEtiquetaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(241,54,"ETIQUETACODIGO","Código","","EtiquetaCodigo","int",0,"px",4,4,"right",null,[],241,"EtiquetaCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(242,55,"ETIQUETALINHACOD","Etiqueta Linha Cod","","EtiquetaLinhaCod","int",0,"px",4,4,"right",null,[],242,"EtiquetaLinhaCod",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(94,56,"ETIQUETALINHATAMFONTE","Tamanho Fonte Linha","EtiquetaLinhaTamFonte","int",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(95,57,"ETIQUETALINHAMARGESQ","Margem Esquerda","","EtiquetaLinhaMargEsq","int",0,"px",4,4,"right",null,[],95,"EtiquetaLinhaMargEsq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(96,58,"ETIQUETALINHAENTRECOL","Tamanho entre Colunas","","EtiquetaLinhaEntreCol","int",0,"px",4,4,"right",null,[],96,"EtiquetaLinhaEntreCol",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESAETIQUETAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAETIQUETAEMPRESAID",gxz:"ZV6cEmpresaEtiquetaEmpresaId",gxold:"OV6cEmpresaEtiquetaEmpresaId",gxvar:"AV6cEmpresaEtiquetaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaEtiquetaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaEtiquetaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAETIQUETAEMPRESAID",gx.O.AV6cEmpresaEtiquetaEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaEtiquetaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAETIQUETAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKETIQUETACODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCETIQUETACODIGO",gxz:"ZV7cEtiquetaCodigo",gxold:"OV7cEtiquetaCodigo",gxvar:"AV7cEtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cEtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETACODIGO",gx.O.AV7cEtiquetaCodigo,0)},c2v:function(){gx.O.AV7cEtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKETIQUETALINHACOD", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCETIQUETALINHACOD",gxz:"ZV8cEtiquetaLinhaCod",gxold:"OV8cEtiquetaLinhaCod",gxvar:"AV8cEtiquetaLinhaCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEtiquetaLinhaCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cEtiquetaLinhaCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETALINHACOD",gx.O.AV8cEtiquetaLinhaCod,0)},c2v:function(){gx.O.AV8cEtiquetaLinhaCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETALINHACOD",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKETIQUETALINHATAMFONTE", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cetiquetalinhatamfonte,isvalid:null,rgrid:[this.Grid1Container],fld:"vCETIQUETALINHATAMFONTE",gxz:"ZV9cEtiquetaLinhaTamFonte",gxold:"OV9cEtiquetaLinhaTamFonte",gxvar:"AV9cEtiquetaLinhaTamFonte",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cEtiquetaLinhaTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cEtiquetaLinhaTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCETIQUETALINHATAMFONTE",gx.O.AV9cEtiquetaLinhaTamFonte)},c2v:function(){gx.O.AV9cEtiquetaLinhaTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETALINHATAMFONTE",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKETIQUETALINHAMARGESQ", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCETIQUETALINHAMARGESQ",gxz:"ZV10cEtiquetaLinhaMargEsq",gxold:"OV10cEtiquetaLinhaMargEsq",gxvar:"AV10cEtiquetaLinhaMargEsq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cEtiquetaLinhaMargEsq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cEtiquetaLinhaMargEsq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETALINHAMARGESQ",gx.O.AV10cEtiquetaLinhaMargEsq,0)},c2v:function(){gx.O.AV10cEtiquetaLinhaMargEsq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETALINHAMARGESQ",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKETIQUETALINHAENTRECOL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCETIQUETALINHAENTRECOL",gxz:"ZV11cEtiquetaLinhaEntreCol",gxold:"OV11cEtiquetaLinhaEntreCol",gxvar:"AV11cEtiquetaLinhaEntreCol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cEtiquetaLinhaEntreCol=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cEtiquetaLinhaEntreCol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETALINHAENTRECOL",gx.O.AV11cEtiquetaLinhaEntreCol,0)},c2v:function(){gx.O.AV11cEtiquetaLinhaEntreCol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETALINHAENTRECOL",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKETIQUETALINHAQTDCAR", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCETIQUETALINHAQTDCAR",gxz:"ZV12cEtiquetaLinhaQtdCar",gxold:"OV12cEtiquetaLinhaQtdCar",gxvar:"AV12cEtiquetaLinhaQtdCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cEtiquetaLinhaQtdCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cEtiquetaLinhaQtdCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETALINHAQTDCAR",gx.O.AV12cEtiquetaLinhaQtdCar,0)},c2v:function(){gx.O.AV12cEtiquetaLinhaQtdCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETALINHAQTDCAR",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAETIQUETAEMPRESAID",gxz:"Z240EmpresaEtiquetaEmpresaId",gxold:"O240EmpresaEtiquetaEmpresaId",gxvar:"A240EmpresaEtiquetaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A240EmpresaEtiquetaEmpresaId=Value},v2z:function(Value){gx.O.Z240EmpresaEtiquetaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAETIQUETAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A240EmpresaEtiquetaEmpresaId,0)},c2v:function(){gx.O.A240EmpresaEtiquetaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAETIQUETAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETACODIGO",gxz:"Z241EtiquetaCodigo",gxold:"O241EtiquetaCodigo",gxvar:"A241EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A241EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z241EtiquetaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A241EtiquetaCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A241EtiquetaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHACOD",gxz:"Z242EtiquetaLinhaCod",gxold:"O242EtiquetaLinhaCod",gxvar:"A242EtiquetaLinhaCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A242EtiquetaLinhaCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z242EtiquetaLinhaCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETALINHACOD",row || gx.fn.currentGridRowImpl(51),gx.O.A242EtiquetaLinhaCod,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A242EtiquetaLinhaCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETALINHACOD",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHATAMFONTE",gxz:"Z94EtiquetaLinhaTamFonte",gxold:"O94EtiquetaLinhaTamFonte",gxvar:"A94EtiquetaLinhaTamFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A94EtiquetaLinhaTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z94EtiquetaLinhaTamFonte=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("ETIQUETALINHATAMFONTE",row || gx.fn.currentGridRowImpl(51),gx.O.A94EtiquetaLinhaTamFonte);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A94EtiquetaLinhaTamFonte=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETALINHATAMFONTE",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHAMARGESQ",gxz:"Z95EtiquetaLinhaMargEsq",gxold:"O95EtiquetaLinhaMargEsq",gxvar:"A95EtiquetaLinhaMargEsq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A95EtiquetaLinhaMargEsq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z95EtiquetaLinhaMargEsq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETALINHAMARGESQ",row || gx.fn.currentGridRowImpl(51),gx.O.A95EtiquetaLinhaMargEsq,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A95EtiquetaLinhaMargEsq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETALINHAMARGESQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETALINHAENTRECOL",gxz:"Z96EtiquetaLinhaEntreCol",gxold:"O96EtiquetaLinhaEntreCol",gxvar:"A96EtiquetaLinhaEntreCol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A96EtiquetaLinhaEntreCol=gx.num.intval(Value)},v2z:function(Value){gx.O.Z96EtiquetaLinhaEntreCol=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETALINHAENTRECOL",row || gx.fn.currentGridRowImpl(51),gx.O.A96EtiquetaLinhaEntreCol,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A96EtiquetaLinhaEntreCol=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETALINHAENTRECOL",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaEtiquetaEmpresaId = "" ;
   this.ZV6cEmpresaEtiquetaEmpresaId = "" ;
   this.OV6cEmpresaEtiquetaEmpresaId = "" ;
   this.AV7cEtiquetaCodigo = 0 ;
   this.ZV7cEtiquetaCodigo = 0 ;
   this.OV7cEtiquetaCodigo = 0 ;
   this.AV8cEtiquetaLinhaCod = 0 ;
   this.ZV8cEtiquetaLinhaCod = 0 ;
   this.OV8cEtiquetaLinhaCod = 0 ;
   this.AV9cEtiquetaLinhaTamFonte = 0 ;
   this.ZV9cEtiquetaLinhaTamFonte = 0 ;
   this.OV9cEtiquetaLinhaTamFonte = 0 ;
   this.AV10cEtiquetaLinhaMargEsq = 0 ;
   this.ZV10cEtiquetaLinhaMargEsq = 0 ;
   this.OV10cEtiquetaLinhaMargEsq = 0 ;
   this.AV11cEtiquetaLinhaEntreCol = 0 ;
   this.ZV11cEtiquetaLinhaEntreCol = 0 ;
   this.OV11cEtiquetaLinhaEntreCol = 0 ;
   this.AV12cEtiquetaLinhaQtdCar = 0 ;
   this.ZV12cEtiquetaLinhaQtdCar = 0 ;
   this.OV12cEtiquetaLinhaQtdCar = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z240EmpresaEtiquetaEmpresaId = "" ;
   this.O240EmpresaEtiquetaEmpresaId = "" ;
   this.Z241EtiquetaCodigo = 0 ;
   this.O241EtiquetaCodigo = 0 ;
   this.Z242EtiquetaLinhaCod = 0 ;
   this.O242EtiquetaLinhaCod = 0 ;
   this.Z94EtiquetaLinhaTamFonte = 0 ;
   this.O94EtiquetaLinhaTamFonte = 0 ;
   this.Z95EtiquetaLinhaMargEsq = 0 ;
   this.O95EtiquetaLinhaMargEsq = 0 ;
   this.Z96EtiquetaLinhaEntreCol = 0 ;
   this.O96EtiquetaLinhaEntreCol = 0 ;
   this.AV6cEmpresaEtiquetaEmpresaId = "" ;
   this.AV7cEtiquetaCodigo = 0 ;
   this.AV8cEtiquetaLinhaCod = 0 ;
   this.AV9cEtiquetaLinhaTamFonte = 0 ;
   this.AV10cEtiquetaLinhaMargEsq = 0 ;
   this.AV11cEtiquetaLinhaEntreCol = 0 ;
   this.AV12cEtiquetaLinhaQtdCar = 0 ;
   this.AV13pEmpresaEtiquetaEmpresaId = "" ;
   this.AV14pEtiquetaCodigo = 0 ;
   this.AV15pEtiquetaLinhaCod = 0 ;
   this.A97EtiquetaLinhaQtdCar = 0 ;
   this.AV5LinkSelection = "" ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A242EtiquetaLinhaCod = 0 ;
   this.A94EtiquetaLinhaTamFonte = 0 ;
   this.A95EtiquetaLinhaMargEsq = 0 ;
   this.A96EtiquetaLinhaEntreCol = 0 ;
   this.Events = {"e131lk2_client": ["ENTER", true] ,"e141lk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaEtiquetaEmpresaId',fld:'vCEMPRESAETIQUETAEMPRESAID'},{av:'AV7cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV8cEtiquetaLinhaCod',fld:'vCETIQUETALINHACOD'},{av:'AV9cEtiquetaLinhaTamFonte',fld:'vCETIQUETALINHATAMFONTE'},{av:'AV10cEtiquetaLinhaMargEsq',fld:'vCETIQUETALINHAMARGESQ'},{av:'AV11cEtiquetaLinhaEntreCol',fld:'vCETIQUETALINHAENTRECOL'},{av:'AV12cEtiquetaLinhaQtdCar',fld:'vCETIQUETALINHAQTDCAR'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A242EtiquetaLinhaCod',fld:'ETIQUETALINHACOD'}],[{av:'AV13pEmpresaEtiquetaEmpresaId',fld:'vPEMPRESAETIQUETAEMPRESAID'},{av:'AV14pEtiquetaCodigo',fld:'vPETIQUETACODIGO'},{av:'AV15pEtiquetaLinhaCod',fld:'vPETIQUETALINHACOD'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaEtiquetaEmpresaId',fld:'vCEMPRESAETIQUETAEMPRESAID'},{av:'AV7cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV8cEtiquetaLinhaCod',fld:'vCETIQUETALINHACOD'},{av:'AV9cEtiquetaLinhaTamFonte',fld:'vCETIQUETALINHATAMFONTE'},{av:'AV10cEtiquetaLinhaMargEsq',fld:'vCETIQUETALINHAMARGESQ'},{av:'AV11cEtiquetaLinhaEntreCol',fld:'vCETIQUETALINHAENTRECOL'},{av:'AV12cEtiquetaLinhaQtdCar',fld:'vCETIQUETALINHAQTDCAR'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaEtiquetaEmpresaId',fld:'vCEMPRESAETIQUETAEMPRESAID'},{av:'AV7cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV8cEtiquetaLinhaCod',fld:'vCETIQUETALINHACOD'},{av:'AV9cEtiquetaLinhaTamFonte',fld:'vCETIQUETALINHATAMFONTE'},{av:'AV10cEtiquetaLinhaMargEsq',fld:'vCETIQUETALINHAMARGESQ'},{av:'AV11cEtiquetaLinhaEntreCol',fld:'vCETIQUETALINHAENTRECOL'},{av:'AV12cEtiquetaLinhaQtdCar',fld:'vCETIQUETALINHAQTDCAR'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaEtiquetaEmpresaId',fld:'vCEMPRESAETIQUETAEMPRESAID'},{av:'AV7cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV8cEtiquetaLinhaCod',fld:'vCETIQUETALINHACOD'},{av:'AV9cEtiquetaLinhaTamFonte',fld:'vCETIQUETALINHATAMFONTE'},{av:'AV10cEtiquetaLinhaMargEsq',fld:'vCETIQUETALINHAMARGESQ'},{av:'AV11cEtiquetaLinhaEntreCol',fld:'vCETIQUETALINHAENTRECOL'},{av:'AV12cEtiquetaLinhaQtdCar',fld:'vCETIQUETALINHAQTDCAR'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaEtiquetaEmpresaId',fld:'vCEMPRESAETIQUETAEMPRESAID'},{av:'AV7cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV8cEtiquetaLinhaCod',fld:'vCETIQUETALINHACOD'},{av:'AV9cEtiquetaLinhaTamFonte',fld:'vCETIQUETALINHATAMFONTE'},{av:'AV10cEtiquetaLinhaMargEsq',fld:'vCETIQUETALINHAMARGESQ'},{av:'AV11cEtiquetaLinhaEntreCol',fld:'vCETIQUETALINHAENTRECOL'},{av:'AV12cEtiquetaLinhaQtdCar',fld:'vCETIQUETALINHAQTDCAR'}],[]];
   this.setVCMap("AV13pEmpresaEtiquetaEmpresaId", "vPEMPRESAETIQUETAEMPRESAID", 0, "char");
   this.setVCMap("AV14pEtiquetaCodigo", "vPETIQUETACODIGO", 0, "int");
   this.setVCMap("AV15pEtiquetaLinhaCod", "vPETIQUETALINHACOD", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx05k0());
