/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:30.95
*/
gx.evt.autoSkip = false;
gx.define('hcidades', false, function () {
   this.ServerClass =  "hcidades" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Cidadesuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCIDADESUF");
         this.AnyError  = 0;
         if ( ! ( this.AV24CidadesUF == "" || this.AV24CidadesUF == "AC" || this.AV24CidadesUF == "AL" || this.AV24CidadesUF == "AP" || this.AV24CidadesUF == "AM" || this.AV24CidadesUF == "BA" || this.AV24CidadesUF == "CE" || this.AV24CidadesUF == "DF" || this.AV24CidadesUF == "ES" || this.AV24CidadesUF == "GO" || this.AV24CidadesUF == "MA" || this.AV24CidadesUF == "MT" || this.AV24CidadesUF == "MS" || this.AV24CidadesUF == "MG" || this.AV24CidadesUF == "PA" || this.AV24CidadesUF == "PB" || this.AV24CidadesUF == "PR" || this.AV24CidadesUF == "PE" || this.AV24CidadesUF == "PI" || this.AV24CidadesUF == "RJ" || this.AV24CidadesUF == "RN" || this.AV24CidadesUF == "RS" || this.AV24CidadesUF == "RO" || this.AV24CidadesUF == "RR" || this.AV24CidadesUF == "SC" || this.AV24CidadesUF == "SP" || this.AV24CidadesUF == "SE" || this.AV24CidadesUF == "TO" || this.AV24CidadesUF == "EX" || (""==this.AV24CidadesUF) ) )
         {
            try {
               gxballoon.setError("Campo CidadesUF fora do intervalo");
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
   this.Valid_Paisesid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(53) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PAISESID", gx.fn.currentGridRowImpl(53));
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
   this.e110n2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e120n2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e200n2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e210n2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e220n2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e230n2_client=function()
   {
      this.executeServerEvent("'VIZUALBAIRROS'", true, arguments[0], false, false);
   };
   this.e240n2_client=function()
   {
      this.executeServerEvent("'VIZUALLOGRAD'", true, arguments[0], false, false);
   };
   this.e170n2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e130n2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e140n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e250n2_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e150n2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e160n2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e260n2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e280n2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e290n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,63,64,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcidades",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(147,54,"CIDADESID","","","CidadesId","int",0,"px",8,8,"right",null,[],147,"CidadesId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(149,55,"CIDADESNOME","","","CidadesNome","svchar",0,"px",40,40,"left",null,[],149,"CidadesNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(157,56,"CIDADESUF","","CidadesUF","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(159,57,"PAISESID","","","PaisesId","int",0,"px",7,7,"right",null,[],159,"PaisesId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(160,58,"PAISESNOME","","","PaisesNome","svchar",0,"px",40,40,"left",null,[],160,"PaisesNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(158,59,"CIDADESCODIBGE","","","CidadesCodIbge","int",0,"px",7,7,"right",null,[],158,"CidadesCodIbge",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmplogradouro","vBMPLOGRADOURO",60,0,"px",17,"px","e240n2_client","","Logradouro","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpbairro","vBMPBAIRRO",61,0,"px",17,"px","e230n2_client","","Bairro","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",62,0,"px",17,"px","e200n2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",63,0,"px",17,"px","e210n2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",64,0,"px",17,"px","e220n2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESID",gxz:"ZV32CidadesId",gxold:"OV32CidadesId",gxvar:"AV32CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESID",gx.O.AV32CidadesId,0)},c2v:function(){gx.O.AV32CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESNOME",gxz:"ZV23CidadesNome",gxold:"OV23CidadesNome",gxvar:"AV23CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CidadesNome=Value},v2z:function(Value){gx.O.ZV23CidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADESNOME",gx.O.AV23CidadesNome,0)},c2v:function(){gx.O.AV23CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cidadesuf,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESUF",gxz:"ZV24CidadesUF",gxold:"OV24CidadesUF",gxvar:"AV24CidadesUF",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24CidadesUF=Value},v2z:function(Value){gx.O.ZV24CidadesUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCIDADESUF",gx.O.AV24CidadesUF)},c2v:function(){gx.O.AV24CidadesUF=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESUF")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE3",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAGINA",gxz:"ZV30QtdePagina",gxold:"OV30QtdePagina",gxvar:"AV30QtdePagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30QtdePagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30QtdePagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAGINA",gx.O.AV30QtdePagina,0)},c2v:function(){gx.O.AV30QtdePagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESID",row || gx.fn.currentGridRowImpl(53),gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(53),gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESUF",gxz:"Z157CidadesUF",gxold:"O157CidadesUF",gxvar:"A157CidadesUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A157CidadesUF=Value},v2z:function(Value){gx.O.Z157CidadesUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CIDADESUF",row || gx.fn.currentGridRowImpl(53),gx.O.A157CidadesUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A157CidadesUF=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESUF",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:this.Valid_Paisesid,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z159PaisesId",gxold:"O159PaisesId",gxvar:"A159PaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A159PaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z159PaisesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAISESID",row || gx.fn.currentGridRowImpl(53),gx.O.A159PaisesId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A159PaisesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAISESID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAISESNOME",gxz:"Z160PaisesNome",gxold:"O160PaisesNome",gxvar:"A160PaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A160PaisesNome=Value},v2z:function(Value){gx.O.Z160PaisesNome=Value},v2c:function(row){gx.fn.setGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(53),gx.O.A160PaisesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A160PaisesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIBGE",gxz:"Z158CidadesCodIbge",gxold:"O158CidadesCodIbge",gxvar:"A158CidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A158CidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.Z158CidadesCodIbge=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(53),gx.O.A158CidadesCodIbge,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A158CidadesCodIbge=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOGRADOURO",gxz:"ZV25bmpLogradouro",gxold:"OV25bmpLogradouro",gxvar:"AV25bmpLogradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25bmpLogradouro=Value},v2z:function(Value){gx.O.ZV25bmpLogradouro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOGRADOURO",row || gx.fn.currentGridRowImpl(53),gx.O.AV25bmpLogradouro,gx.O.AV41Bmplogradouro_GXI)},c2v:function(){gx.O.AV41Bmplogradouro_GXI=this.val_GXI();gx.O.AV25bmpLogradouro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOGRADOURO",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOGRADOURO_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV41Bmplogradouro_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPBAIRRO",gxz:"ZV26bmpBairro",gxold:"OV26bmpBairro",gxvar:"AV26bmpBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26bmpBairro=Value},v2z:function(Value){gx.O.ZV26bmpBairro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPBAIRRO",row || gx.fn.currentGridRowImpl(53),gx.O.AV26bmpBairro,gx.O.AV40Bmpbairro_GXI)},c2v:function(){gx.O.AV40Bmpbairro_GXI=this.val_GXI();gx.O.AV26bmpBairro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPBAIRRO",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPBAIRRO_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV40Bmpbairro_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV32CidadesId = 0 ;
   this.ZV32CidadesId = 0 ;
   this.OV32CidadesId = 0 ;
   this.AV23CidadesNome = "" ;
   this.ZV23CidadesNome = "" ;
   this.OV23CidadesNome = "" ;
   this.AV24CidadesUF = "" ;
   this.ZV24CidadesUF = "" ;
   this.OV24CidadesUF = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV30QtdePagina = 0 ;
   this.ZV30QtdePagina = 0 ;
   this.OV30QtdePagina = 0 ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.Z157CidadesUF = "" ;
   this.O157CidadesUF = "" ;
   this.Z159PaisesId = 0 ;
   this.O159PaisesId = 0 ;
   this.Z160PaisesNome = "" ;
   this.O160PaisesNome = "" ;
   this.Z158CidadesCodIbge = 0 ;
   this.O158CidadesCodIbge = 0 ;
   this.ZV25bmpLogradouro = "" ;
   this.OV25bmpLogradouro = "" ;
   this.ZV26bmpBairro = "" ;
   this.OV26bmpBairro = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV32CidadesId = 0 ;
   this.AV23CidadesNome = "" ;
   this.AV24CidadesUF = "" ;
   this.AV5Pagina = 0 ;
   this.AV30QtdePagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A10373CidadesNomeSemAcento = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.A159PaisesId = 0 ;
   this.A160PaisesNome = "" ;
   this.A158CidadesCodIbge = 0 ;
   this.AV25bmpLogradouro = "" ;
   this.AV26bmpBairro = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.Events = {"e110n2_client": ["'ANTERIOR'", true] ,"e120n2_client": ["'PROXIMO'", true] ,"e200n2_client": ["'ALTERAR'", true] ,"e210n2_client": ["'EXCLUIR'", true] ,"e220n2_client": ["'CONSULTAR'", true] ,"e230n2_client": ["'VIZUALBAIRROS'", true] ,"e240n2_client": ["'VIZUALLOGRAD'", true] ,"e170n2_client": ["VPAGINA.CLICK", true] ,"e130n2_client": ["'NOVO'", true] ,"e140n2_client": ["'FECHAR'", true] ,"e250n2_client": ["'ATUALIZAR'", true] ,"e150n2_client": ["'IMPRIMIR'", true] ,"e160n2_client": ["'PROCURAR'", true] ,"e260n2_client": ["'ATUALIZAPAGINA'", true] ,"e280n2_client": ["ENTER", true] ,"e290n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CIDADESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESID","Title")',ctrl:'CIDADESID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CIDADESNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESNOME","Title")',ctrl:'CIDADESNOME',prop:'Title'},{ctrl:'CIDADESUF'},{ctrl:'PAISESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAISESID","Title")',ctrl:'PAISESID',prop:'Title'},{ctrl:'PAISESNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAISESNOME","Title")',ctrl:'PAISESNOME',prop:'Title'},{ctrl:'CIDADESCODIBGE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESCODIBGE","Title")',ctrl:'CIDADESCODIBGE',prop:'Title'},{av:'AV30QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV27filtros',fld:'vFILTROS'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30QtdePagina',fld:'vQTDEPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'VIZUALBAIRROS'"] = [[{av:'A147CidadesId',fld:'CIDADESID'},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'VIZUALLOGRAD'"] = [[{av:'A147CidadesId',fld:'CIDADESID'},{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A149CidadesNome',fld:'CIDADESNOME'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmdesc',fld:'vPGMDESC'}],[{av:'AV17OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CidadesId',fld:'vCIDADESID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME'},{av:'AV24CidadesUF',fld:'vCIDADESUF'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV26bmpBairro',fld:'vBMPBAIRRO'},{av:'gx.fn.getCtrlProperty("vBMPBAIRRO","Tooltiptext")',ctrl:'vBMPBAIRRO',prop:'Tooltiptext'},{av:'AV25bmpLogradouro',fld:'vBMPLOGRADOURO'},{av:'gx.fn.getCtrlProperty("vBMPLOGRADOURO","Tooltiptext")',ctrl:'vBMPLOGRADOURO',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV26bmpBairro", rfrProp:"Value", gxAttId:"Bmpbairro"});
   GridContainer.addRefreshingVar({rfrVar:"AV26bmpBairro", rfrProp:"Tooltiptext", gxAttId:"Bmpbairro"});
   GridContainer.addRefreshingVar({rfrVar:"AV25bmpLogradouro", rfrProp:"Value", gxAttId:"Bmplogradouro"});
   GridContainer.addRefreshingVar({rfrVar:"AV25bmpLogradouro", rfrProp:"Tooltiptext", gxAttId:"Bmplogradouro"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcidades());
