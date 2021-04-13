/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:13.17
*/
gx.evt.autoSkip = false;
gx.define('gx0540', false, function () {
   this.ServerClass =  "gx0540" ;
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
      this.AV13pPermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPPERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV14pPermissaoUsuCxaContaUsuarioId=gx.fn.getControlValue("vPPERMISSAOUSUCXACONTAUSUARIOID") ;
   };
   this.Validv_Cpermissaousucxacontaperbaipag=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCPERMISSAOUSUCXACONTAPERBAIPAG");
         this.AnyError  = 0;
         if ( ! ( this.AV10cPermissaoUsuCxaContaPerBaiPag == "0" || this.AV10cPermissaoUsuCxaContaPerBaiPag == "1" || this.AV10cPermissaoUsuCxaContaPerBaiPag == "2" || this.AV10cPermissaoUsuCxaContaPerBaiPag == "3" || (""==this.AV10cPermissaoUsuCxaContaPerBaiPag) ) )
         {
            try {
               gxballoon.setError("Campo cPermissaoUsuCxaContaPerBaiPag fora do intervalo");
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
   this.e131k12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141k11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0540",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1076,53,"PERMISSAOUSUCXACONTAEMPRESAID","Empresa","","PermissaoUsuCxaContaEmpresaId","char",0,"px",10,10,"left",null,[],1076,"PermissaoUsuCxaContaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1771,54,"PERMISSAOUSUCXACONTAUSUARIOID","Usuário","","PermissaoUsuCxaContaUsuarioId","char",0,"px",12,12,"left",null,[],1771,"PermissaoUsuCxaContaUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1091,55,"PERMISSAOUSUCXACONTAUSUARIOALT","Usuário Alteração","","PermissaoUsuCxaContaUsuarioAlt","char",0,"px",12,12,"left",null,[],1091,"PermissaoUsuCxaContaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1092,56,"PERMISSAOUSUCXACONTADATAHORAAL","Data/Hora Alteração","","PermissaoUsuCxaContaDataHoraAl","dtime",0,"px",16,16,"right",null,[],1092,"PermissaoUsuCxaContaDataHoraAl",true,5,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1740,57,"PERMISSAOUSUCXACONTAPERBAIPAG","Tipo Permissão Contas Pagar","PermissaoUsuCxaContaPerBaiPag","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1742,58,"PERMISSAOUSUCXACONTASNCONPAG","Consultar Contas Pagar","","PermissaoUsuCxaContaSnConPag","char",0,"px",1,1,"left",null,[],1742,"PermissaoUsuCxaContaSnConPag",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTAEMPRESAID",gxz:"ZV6cPermissaoUsuCxaContaEmpresaId",gxold:"OV6cPermissaoUsuCxaContaEmpresaId",gxvar:"AV6cPermissaoUsuCxaContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPermissaoUsuCxaContaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cPermissaoUsuCxaContaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTAEMPRESAID",gx.O.AV6cPermissaoUsuCxaContaEmpresaId,0)},c2v:function(){gx.O.AV6cPermissaoUsuCxaContaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTAUSUARIOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTAUSUARIOID",gxz:"ZV7cPermissaoUsuCxaContaUsuarioId",gxold:"OV7cPermissaoUsuCxaContaUsuarioId",gxvar:"AV7cPermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.ZV7cPermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTAUSUARIOID",gx.O.AV7cPermissaoUsuCxaContaUsuarioId,0)},c2v:function(){gx.O.AV7cPermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTAUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTAUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTAUSUARIOALT",gxz:"ZV8cPermissaoUsuCxaContaUsuarioAlt",gxold:"OV8cPermissaoUsuCxaContaUsuarioAlt",gxvar:"AV8cPermissaoUsuCxaContaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPermissaoUsuCxaContaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cPermissaoUsuCxaContaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTAUSUARIOALT",gx.O.AV8cPermissaoUsuCxaContaUsuarioAlt,0)},c2v:function(){gx.O.AV8cPermissaoUsuCxaContaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTADATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTADATAHORAALT",gxz:"ZV9cPermissaoUsuCxaContaDataHoraAlt",gxold:"OV9cPermissaoUsuCxaContaDataHoraAlt",gxvar:"AV9cPermissaoUsuCxaContaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPermissaoUsuCxaContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cPermissaoUsuCxaContaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTADATAHORAALT",gx.O.AV9cPermissaoUsuCxaContaDataHoraAlt,0)},c2v:function(){gx.O.AV9cPermissaoUsuCxaContaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPERMISSAOUSUCXACONTADATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTAPERBAIPAG", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cpermissaousucxacontaperbaipag,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTAPERBAIPAG",gxz:"ZV10cPermissaoUsuCxaContaPerBaiPag",gxold:"OV10cPermissaoUsuCxaContaPerBaiPag",gxvar:"AV10cPermissaoUsuCxaContaPerBaiPag",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cPermissaoUsuCxaContaPerBaiPag=Value},v2z:function(Value){gx.O.ZV10cPermissaoUsuCxaContaPerBaiPag=Value},v2c:function(){gx.fn.setComboBoxValue("vCPERMISSAOUSUCXACONTAPERBAIPAG",gx.O.AV10cPermissaoUsuCxaContaPerBaiPag)},c2v:function(){gx.O.AV10cPermissaoUsuCxaContaPerBaiPag=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTAPERBAIPAG")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTASNCONPAG", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTASNCONPAG",gxz:"ZV11cPermissaoUsuCxaContaSnConPag",gxold:"OV11cPermissaoUsuCxaContaSnConPag",gxvar:"AV11cPermissaoUsuCxaContaSnConPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPermissaoUsuCxaContaSnConPag=Value},v2z:function(Value){gx.O.ZV11cPermissaoUsuCxaContaSnConPag=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTASNCONPAG",gx.O.AV11cPermissaoUsuCxaContaSnConPag,0)},c2v:function(){gx.O.AV11cPermissaoUsuCxaContaSnConPag=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTASNCONPAG")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTASNALTPAG", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTASNALTPAG",gxz:"ZV12cPermissaoUsuCxaContaSnAltPag",gxold:"OV12cPermissaoUsuCxaContaSnAltPag",gxvar:"AV12cPermissaoUsuCxaContaSnAltPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPermissaoUsuCxaContaSnAltPag=Value},v2z:function(Value){gx.O.ZV12cPermissaoUsuCxaContaSnAltPag=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTASNALTPAG",gx.O.AV12cPermissaoUsuCxaContaSnAltPag,0)},c2v:function(){gx.O.AV12cPermissaoUsuCxaContaSnAltPag=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTASNALTPAG")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAEMPRESAID",gxz:"Z1076PermissaoUsuCxaContaEmpresaId",gxold:"O1076PermissaoUsuCxaContaEmpresaId",gxvar:"A1076PermissaoUsuCxaContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1076PermissaoUsuCxaContaEmpresaId=Value},v2z:function(Value){gx.O.Z1076PermissaoUsuCxaContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1076PermissaoUsuCxaContaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1076PermissaoUsuCxaContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOALT",gxz:"Z1091PermissaoUsuCxaContaUsuarioAlt",gxold:"O1091PermissaoUsuCxaContaUsuarioAlt",gxvar:"A1091PermissaoUsuCxaContaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1091PermissaoUsuCxaContaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1091PermissaoUsuCxaContaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A1091PermissaoUsuCxaContaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1091PermissaoUsuCxaContaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTADATAHORAAL",gxz:"Z1092PermissaoUsuCxaContaDataHoraAl",gxold:"O1092PermissaoUsuCxaContaDataHoraAl",gxvar:"A1092PermissaoUsuCxaContaDataHoraAl",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1092PermissaoUsuCxaContaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1092PermissaoUsuCxaContaDataHoraAl=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTADATAHORAAL",row || gx.fn.currentGridRowImpl(51),gx.O.A1092PermissaoUsuCxaContaDataHoraAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1092PermissaoUsuCxaContaDataHoraAl=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PERMISSAOUSUCXACONTADATAHORAAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAPERBAIPAG",gxz:"Z1740PermissaoUsuCxaContaPerBaiPag",gxold:"O1740PermissaoUsuCxaContaPerBaiPag",gxvar:"A1740PermissaoUsuCxaContaPerBaiPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1740PermissaoUsuCxaContaPerBaiPag=Value},v2z:function(Value){gx.O.Z1740PermissaoUsuCxaContaPerBaiPag=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PERMISSAOUSUCXACONTAPERBAIPAG",row || gx.fn.currentGridRowImpl(51),gx.O.A1740PermissaoUsuCxaContaPerBaiPag);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1740PermissaoUsuCxaContaPerBaiPag=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAPERBAIPAG",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTASNCONPAG",gxz:"Z1742PermissaoUsuCxaContaSnConPag",gxold:"O1742PermissaoUsuCxaContaSnConPag",gxvar:"A1742PermissaoUsuCxaContaSnConPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1742PermissaoUsuCxaContaSnConPag=Value},v2z:function(Value){gx.O.Z1742PermissaoUsuCxaContaSnConPag=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTASNCONPAG",row || gx.fn.currentGridRowImpl(51),gx.O.A1742PermissaoUsuCxaContaSnConPag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1742PermissaoUsuCxaContaSnConPag=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTASNCONPAG",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.ZV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.OV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.AV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.ZV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.OV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.AV8cPermissaoUsuCxaContaUsuarioAlt = "" ;
   this.ZV8cPermissaoUsuCxaContaUsuarioAlt = "" ;
   this.OV8cPermissaoUsuCxaContaUsuarioAlt = "" ;
   this.AV9cPermissaoUsuCxaContaDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cPermissaoUsuCxaContaDataHoraAlt = gx.date.nullDate() ;
   this.OV9cPermissaoUsuCxaContaDataHoraAlt = gx.date.nullDate() ;
   this.AV10cPermissaoUsuCxaContaPerBaiPag = "" ;
   this.ZV10cPermissaoUsuCxaContaPerBaiPag = "" ;
   this.OV10cPermissaoUsuCxaContaPerBaiPag = "" ;
   this.AV11cPermissaoUsuCxaContaSnConPag = "" ;
   this.ZV11cPermissaoUsuCxaContaSnConPag = "" ;
   this.OV11cPermissaoUsuCxaContaSnConPag = "" ;
   this.AV12cPermissaoUsuCxaContaSnAltPag = "" ;
   this.ZV12cPermissaoUsuCxaContaSnAltPag = "" ;
   this.OV12cPermissaoUsuCxaContaSnAltPag = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.O1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.Z1091PermissaoUsuCxaContaUsuarioAlt = "" ;
   this.O1091PermissaoUsuCxaContaUsuarioAlt = "" ;
   this.Z1092PermissaoUsuCxaContaDataHoraAl = gx.date.nullDate() ;
   this.O1092PermissaoUsuCxaContaDataHoraAl = gx.date.nullDate() ;
   this.Z1740PermissaoUsuCxaContaPerBaiPag = "" ;
   this.O1740PermissaoUsuCxaContaPerBaiPag = "" ;
   this.Z1742PermissaoUsuCxaContaSnConPag = "" ;
   this.O1742PermissaoUsuCxaContaSnConPag = "" ;
   this.AV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.AV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.AV8cPermissaoUsuCxaContaUsuarioAlt = "" ;
   this.AV9cPermissaoUsuCxaContaDataHoraAlt = gx.date.nullDate() ;
   this.AV10cPermissaoUsuCxaContaPerBaiPag = "" ;
   this.AV11cPermissaoUsuCxaContaSnConPag = "" ;
   this.AV12cPermissaoUsuCxaContaSnAltPag = "" ;
   this.AV13pPermissaoUsuCxaContaEmpresaId = "" ;
   this.AV14pPermissaoUsuCxaContaUsuarioId = "" ;
   this.A1743PermissaoUsuCxaContaSnAltPag = "" ;
   this.AV5LinkSelection = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1091PermissaoUsuCxaContaUsuarioAlt = "" ;
   this.A1092PermissaoUsuCxaContaDataHoraAl = gx.date.nullDate() ;
   this.A1740PermissaoUsuCxaContaPerBaiPag = "" ;
   this.A1742PermissaoUsuCxaContaSnConPag = "" ;
   this.Events = {"e131k12_client": ["ENTER", true] ,"e141k11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cPermissaoUsuCxaContaUsuarioAlt',fld:'vCPERMISSAOUSUCXACONTAUSUARIOALT'},{av:'AV9cPermissaoUsuCxaContaDataHoraAlt',fld:'vCPERMISSAOUSUCXACONTADATAHORAALT'},{av:'AV10cPermissaoUsuCxaContaPerBaiPag',fld:'vCPERMISSAOUSUCXACONTAPERBAIPAG'},{av:'AV11cPermissaoUsuCxaContaSnConPag',fld:'vCPERMISSAOUSUCXACONTASNCONPAG'},{av:'AV12cPermissaoUsuCxaContaSnAltPag',fld:'vCPERMISSAOUSUCXACONTASNALTPAG'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'}],[{av:'AV13pPermissaoUsuCxaContaEmpresaId',fld:'vPPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV14pPermissaoUsuCxaContaUsuarioId',fld:'vPPERMISSAOUSUCXACONTAUSUARIOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cPermissaoUsuCxaContaUsuarioAlt',fld:'vCPERMISSAOUSUCXACONTAUSUARIOALT'},{av:'AV9cPermissaoUsuCxaContaDataHoraAlt',fld:'vCPERMISSAOUSUCXACONTADATAHORAALT'},{av:'AV10cPermissaoUsuCxaContaPerBaiPag',fld:'vCPERMISSAOUSUCXACONTAPERBAIPAG'},{av:'AV11cPermissaoUsuCxaContaSnConPag',fld:'vCPERMISSAOUSUCXACONTASNCONPAG'},{av:'AV12cPermissaoUsuCxaContaSnAltPag',fld:'vCPERMISSAOUSUCXACONTASNALTPAG'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cPermissaoUsuCxaContaUsuarioAlt',fld:'vCPERMISSAOUSUCXACONTAUSUARIOALT'},{av:'AV9cPermissaoUsuCxaContaDataHoraAlt',fld:'vCPERMISSAOUSUCXACONTADATAHORAALT'},{av:'AV10cPermissaoUsuCxaContaPerBaiPag',fld:'vCPERMISSAOUSUCXACONTAPERBAIPAG'},{av:'AV11cPermissaoUsuCxaContaSnConPag',fld:'vCPERMISSAOUSUCXACONTASNCONPAG'},{av:'AV12cPermissaoUsuCxaContaSnAltPag',fld:'vCPERMISSAOUSUCXACONTASNALTPAG'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cPermissaoUsuCxaContaUsuarioAlt',fld:'vCPERMISSAOUSUCXACONTAUSUARIOALT'},{av:'AV9cPermissaoUsuCxaContaDataHoraAlt',fld:'vCPERMISSAOUSUCXACONTADATAHORAALT'},{av:'AV10cPermissaoUsuCxaContaPerBaiPag',fld:'vCPERMISSAOUSUCXACONTAPERBAIPAG'},{av:'AV11cPermissaoUsuCxaContaSnConPag',fld:'vCPERMISSAOUSUCXACONTASNCONPAG'},{av:'AV12cPermissaoUsuCxaContaSnAltPag',fld:'vCPERMISSAOUSUCXACONTASNALTPAG'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cPermissaoUsuCxaContaUsuarioAlt',fld:'vCPERMISSAOUSUCXACONTAUSUARIOALT'},{av:'AV9cPermissaoUsuCxaContaDataHoraAlt',fld:'vCPERMISSAOUSUCXACONTADATAHORAALT'},{av:'AV10cPermissaoUsuCxaContaPerBaiPag',fld:'vCPERMISSAOUSUCXACONTAPERBAIPAG'},{av:'AV11cPermissaoUsuCxaContaSnConPag',fld:'vCPERMISSAOUSUCXACONTASNCONPAG'},{av:'AV12cPermissaoUsuCxaContaSnAltPag',fld:'vCPERMISSAOUSUCXACONTASNALTPAG'}],[]];
   this.setVCMap("AV13pPermissaoUsuCxaContaEmpresaId", "vPPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV14pPermissaoUsuCxaContaUsuarioId", "vPPERMISSAOUSUCXACONTAUSUARIOID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0540());
