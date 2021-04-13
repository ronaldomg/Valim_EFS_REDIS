/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:34:20.47
*/
gx.evt.autoSkip = false;
gx.define('gx0in0', false, function () {
   this.ServerClass =  "gx0in0" ;
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
      this.AV13pICMSProdutoEmpresaId=gx.fn.getControlValue("vPICMSPRODUTOEMPRESAID") ;
      this.AV14pSituacaoTributariaTipo=gx.fn.getControlValue("vPSITUACAOTRIBUTARIATIPO") ;
      this.AV15pSituacaoTributariaCodigo=gx.fn.getControlValue("vPSITUACAOTRIBUTARIACODIGO") ;
      this.AV16pICMSProdutoSequencia=gx.fn.getIntegerValue("vPICMSPRODUTOSEQUENCIA",'.') ;
   };
   this.Validv_Cicmsprodutoufdestino=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCICMSPRODUTOUFDESTINO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cICMSProdutoUFDestino == "" || this.AV10cICMSProdutoUFDestino == "AC" || this.AV10cICMSProdutoUFDestino == "AL" || this.AV10cICMSProdutoUFDestino == "AP" || this.AV10cICMSProdutoUFDestino == "AM" || this.AV10cICMSProdutoUFDestino == "BA" || this.AV10cICMSProdutoUFDestino == "CE" || this.AV10cICMSProdutoUFDestino == "DF" || this.AV10cICMSProdutoUFDestino == "ES" || this.AV10cICMSProdutoUFDestino == "GO" || this.AV10cICMSProdutoUFDestino == "MA" || this.AV10cICMSProdutoUFDestino == "MT" || this.AV10cICMSProdutoUFDestino == "MS" || this.AV10cICMSProdutoUFDestino == "MG" || this.AV10cICMSProdutoUFDestino == "PA" || this.AV10cICMSProdutoUFDestino == "PB" || this.AV10cICMSProdutoUFDestino == "PR" || this.AV10cICMSProdutoUFDestino == "PE" || this.AV10cICMSProdutoUFDestino == "PI" || this.AV10cICMSProdutoUFDestino == "RJ" || this.AV10cICMSProdutoUFDestino == "RN" || this.AV10cICMSProdutoUFDestino == "RS" || this.AV10cICMSProdutoUFDestino == "RO" || this.AV10cICMSProdutoUFDestino == "RR" || this.AV10cICMSProdutoUFDestino == "SC" || this.AV10cICMSProdutoUFDestino == "SP" || this.AV10cICMSProdutoUFDestino == "SE" || this.AV10cICMSProdutoUFDestino == "TO" || this.AV10cICMSProdutoUFDestino == "EX" || (""==this.AV10cICMSProdutoUFDestino) ) )
         {
            try {
               gxballoon.setError("Campo cICMSProdutoUFDestino fora do intervalo");
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
   this.e131p62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141p61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0in0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(6419,53,"ICMSPRODUTOEMPRESAID","Empresa do ICMS Produto","","ICMSProdutoEmpresaId","char",0,"px",10,10,"left",null,[],6419,"ICMSProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3564,54,"SITUACAOTRIBUTARIATIPO","Tipo de Situação Tributária","SituacaoTributariaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(3566,55,"SITUACAOTRIBUTARIACODIGO","Código da Situação Tributária","","SituacaoTributariaCodigo","char",0,"px",4,4,"left",null,[],3566,"SituacaoTributariaCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3567,56,"ICMSPRODUTOSEQUENCIA","Sequência","","ICMSProdutoSequencia","int",0,"px",4,4,"right",null,[],3567,"ICMSProdutoSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3552,57,"ICMSPRODUTOUFDESTINO","UF de Favorecida","ICMSProdutoUFDestino","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(3553,58,"ICMSPRODUTOCATEGORIA","Categoria","","ICMSProdutoCategoria","int",0,"px",1,1,"right",null,[],3553,"ICMSProdutoCategoria",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10608,59,"ICMSPRODUTONCMCODIGO","NCM","","ICMSProdutoNCMCodigo","int",0,"px",8,8,"right",null,[],10608,"ICMSProdutoNCMCodigo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKICMSPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCICMSPRODUTOEMPRESAID",gxz:"ZV6cICMSProdutoEmpresaId",gxold:"OV6cICMSProdutoEmpresaId",gxvar:"AV6cICMSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cICMSProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cICMSProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCICMSPRODUTOEMPRESAID",gx.O.AV6cICMSProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cICMSProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCICMSPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSITUACAOTRIBUTARIATIPO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSITUACAOTRIBUTARIATIPO",gxz:"ZV7cSituacaoTributariaTipo",gxold:"OV7cSituacaoTributariaTipo",gxvar:"AV7cSituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cSituacaoTributariaTipo=Value},v2z:function(Value){gx.O.ZV7cSituacaoTributariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCSITUACAOTRIBUTARIATIPO",gx.O.AV7cSituacaoTributariaTipo)},c2v:function(){gx.O.AV7cSituacaoTributariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCSITUACAOTRIBUTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSITUACAOTRIBUTARIACODIGO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSITUACAOTRIBUTARIACODIGO",gxz:"ZV8cSituacaoTributariaCodigo",gxold:"OV8cSituacaoTributariaCodigo",gxvar:"AV8cSituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.ZV8cSituacaoTributariaCodigo=Value},v2c:function(){gx.fn.setControlValue("vCSITUACAOTRIBUTARIACODIGO",gx.O.AV8cSituacaoTributariaCodigo,0)},c2v:function(){gx.O.AV8cSituacaoTributariaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCSITUACAOTRIBUTARIACODIGO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKICMSPRODUTOSEQUENCIA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCICMSPRODUTOSEQUENCIA",gxz:"ZV9cICMSProdutoSequencia",gxold:"OV9cICMSProdutoSequencia",gxvar:"AV9cICMSProdutoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cICMSProdutoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cICMSProdutoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCICMSPRODUTOSEQUENCIA",gx.O.AV9cICMSProdutoSequencia,0)},c2v:function(){gx.O.AV9cICMSProdutoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCICMSPRODUTOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKICMSPRODUTOUFDESTINO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cicmsprodutoufdestino,isvalid:null,rgrid:[this.Grid1Container],fld:"vCICMSPRODUTOUFDESTINO",gxz:"ZV10cICMSProdutoUFDestino",gxold:"OV10cICMSProdutoUFDestino",gxvar:"AV10cICMSProdutoUFDestino",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cICMSProdutoUFDestino=Value},v2z:function(Value){gx.O.ZV10cICMSProdutoUFDestino=Value},v2c:function(){gx.fn.setComboBoxValue("vCICMSPRODUTOUFDESTINO",gx.O.AV10cICMSProdutoUFDestino)},c2v:function(){gx.O.AV10cICMSProdutoUFDestino=this.val()},val:function(){return gx.fn.getControlValue("vCICMSPRODUTOUFDESTINO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKICMSPRODUTOCATEGORIA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCICMSPRODUTOCATEGORIA",gxz:"ZV11cICMSProdutoCategoria",gxold:"OV11cICMSProdutoCategoria",gxvar:"AV11cICMSProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cICMSProdutoCategoria=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cICMSProdutoCategoria=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCICMSPRODUTOCATEGORIA",gx.O.AV11cICMSProdutoCategoria,0)},c2v:function(){gx.O.AV11cICMSProdutoCategoria=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCICMSPRODUTOCATEGORIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOEMPRESAID",gxz:"ZV12cProdutoEmpresaId",gxold:"OV12cProdutoEmpresaId",gxvar:"AV12cProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV12cProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPRODUTOEMPRESAID",gx.O.AV12cProdutoEmpresaId,0)},c2v:function(){gx.O.AV12cProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOEMPRESAID",gxz:"Z6419ICMSProdutoEmpresaId",gxold:"O6419ICMSProdutoEmpresaId",gxvar:"A6419ICMSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6419ICMSProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z6419ICMSProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A6419ICMSProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6419ICMSProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ICMSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPO",gxz:"Z3564SituacaoTributariaTipo",gxold:"O3564SituacaoTributariaTipo",gxvar:"A3564SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3564SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.Z3564SituacaoTributariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A3564SituacaoTributariaTipo)},c2v:function(){gx.O.A3564SituacaoTributariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIACODIGO",gxz:"Z3566SituacaoTributariaCodigo",gxold:"O3566SituacaoTributariaCodigo",gxvar:"A3566SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3566SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.Z3566SituacaoTributariaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A3566SituacaoTributariaCodigo,0)},c2v:function(){gx.O.A3566SituacaoTributariaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOSEQUENCIA",gxz:"Z3567ICMSProdutoSequencia",gxold:"O3567ICMSProdutoSequencia",gxvar:"A3567ICMSProdutoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3567ICMSProdutoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3567ICMSProdutoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A3567ICMSProdutoSequencia,0)},c2v:function(){gx.O.A3567ICMSProdutoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ICMSPRODUTOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOUFDESTINO",gxz:"Z3552ICMSProdutoUFDestino",gxold:"O3552ICMSProdutoUFDestino",gxvar:"A3552ICMSProdutoUFDestino",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3552ICMSProdutoUFDestino=Value},v2z:function(Value){gx.O.Z3552ICMSProdutoUFDestino=Value},v2c:function(row){gx.fn.setGridComboBoxValue("ICMSPRODUTOUFDESTINO",row || gx.fn.currentGridRowImpl(51),gx.O.A3552ICMSProdutoUFDestino);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3552ICMSProdutoUFDestino=this.val()},val:function(row){return gx.fn.getGridControlValue("ICMSPRODUTOUFDESTINO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTOCATEGORIA",gxz:"Z3553ICMSProdutoCategoria",gxold:"O3553ICMSProdutoCategoria",gxvar:"A3553ICMSProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3553ICMSProdutoCategoria=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3553ICMSProdutoCategoria=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTOCATEGORIA",row || gx.fn.currentGridRowImpl(51),gx.O.A3553ICMSProdutoCategoria,0)},c2v:function(){gx.O.A3553ICMSProdutoCategoria=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ICMSPRODUTOCATEGORIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ICMSPRODUTONCMCODIGO",gxz:"Z10608ICMSProdutoNCMCodigo",gxold:"O10608ICMSProdutoNCMCodigo",gxvar:"A10608ICMSProdutoNCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10608ICMSProdutoNCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10608ICMSProdutoNCMCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ICMSPRODUTONCMCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A10608ICMSProdutoNCMCodigo,0)},c2v:function(){gx.O.A10608ICMSProdutoNCMCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ICMSPRODUTONCMCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cICMSProdutoEmpresaId = "" ;
   this.ZV6cICMSProdutoEmpresaId = "" ;
   this.OV6cICMSProdutoEmpresaId = "" ;
   this.AV7cSituacaoTributariaTipo = "" ;
   this.ZV7cSituacaoTributariaTipo = "" ;
   this.OV7cSituacaoTributariaTipo = "" ;
   this.AV8cSituacaoTributariaCodigo = "" ;
   this.ZV8cSituacaoTributariaCodigo = "" ;
   this.OV8cSituacaoTributariaCodigo = "" ;
   this.AV9cICMSProdutoSequencia = 0 ;
   this.ZV9cICMSProdutoSequencia = 0 ;
   this.OV9cICMSProdutoSequencia = 0 ;
   this.AV10cICMSProdutoUFDestino = "" ;
   this.ZV10cICMSProdutoUFDestino = "" ;
   this.OV10cICMSProdutoUFDestino = "" ;
   this.AV11cICMSProdutoCategoria = 0 ;
   this.ZV11cICMSProdutoCategoria = 0 ;
   this.OV11cICMSProdutoCategoria = 0 ;
   this.AV12cProdutoEmpresaId = "" ;
   this.ZV12cProdutoEmpresaId = "" ;
   this.OV12cProdutoEmpresaId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z6419ICMSProdutoEmpresaId = "" ;
   this.O6419ICMSProdutoEmpresaId = "" ;
   this.Z3564SituacaoTributariaTipo = "" ;
   this.O3564SituacaoTributariaTipo = "" ;
   this.Z3566SituacaoTributariaCodigo = "" ;
   this.O3566SituacaoTributariaCodigo = "" ;
   this.Z3567ICMSProdutoSequencia = 0 ;
   this.O3567ICMSProdutoSequencia = 0 ;
   this.Z3552ICMSProdutoUFDestino = "" ;
   this.O3552ICMSProdutoUFDestino = "" ;
   this.Z3553ICMSProdutoCategoria = 0 ;
   this.O3553ICMSProdutoCategoria = 0 ;
   this.Z10608ICMSProdutoNCMCodigo = 0 ;
   this.O10608ICMSProdutoNCMCodigo = 0 ;
   this.AV6cICMSProdutoEmpresaId = "" ;
   this.AV7cSituacaoTributariaTipo = "" ;
   this.AV8cSituacaoTributariaCodigo = "" ;
   this.AV9cICMSProdutoSequencia = 0 ;
   this.AV10cICMSProdutoUFDestino = "" ;
   this.AV11cICMSProdutoCategoria = 0 ;
   this.AV12cProdutoEmpresaId = "" ;
   this.AV13pICMSProdutoEmpresaId = "" ;
   this.AV14pSituacaoTributariaTipo = "" ;
   this.AV15pSituacaoTributariaCodigo = "" ;
   this.AV16pICMSProdutoSequencia = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.AV5LinkSelection = "" ;
   this.A6419ICMSProdutoEmpresaId = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A3567ICMSProdutoSequencia = 0 ;
   this.A3552ICMSProdutoUFDestino = "" ;
   this.A3553ICMSProdutoCategoria = 0 ;
   this.A10608ICMSProdutoNCMCodigo = 0 ;
   this.Events = {"e131p62_client": ["ENTER", true] ,"e141p61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cICMSProdutoEmpresaId',fld:'vCICMSPRODUTOEMPRESAID'},{av:'AV7cSituacaoTributariaTipo',fld:'vCSITUACAOTRIBUTARIATIPO'},{av:'AV8cSituacaoTributariaCodigo',fld:'vCSITUACAOTRIBUTARIACODIGO'},{av:'AV9cICMSProdutoSequencia',fld:'vCICMSPRODUTOSEQUENCIA'},{av:'AV10cICMSProdutoUFDestino',fld:'vCICMSPRODUTOUFDESTINO'},{av:'AV11cICMSProdutoCategoria',fld:'vCICMSPRODUTOCATEGORIA'},{av:'AV12cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A6419ICMSProdutoEmpresaId',fld:'ICMSPRODUTOEMPRESAID'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A3567ICMSProdutoSequencia',fld:'ICMSPRODUTOSEQUENCIA'}],[{av:'AV13pICMSProdutoEmpresaId',fld:'vPICMSPRODUTOEMPRESAID'},{av:'AV14pSituacaoTributariaTipo',fld:'vPSITUACAOTRIBUTARIATIPO'},{av:'AV15pSituacaoTributariaCodigo',fld:'vPSITUACAOTRIBUTARIACODIGO'},{av:'AV16pICMSProdutoSequencia',fld:'vPICMSPRODUTOSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cICMSProdutoEmpresaId',fld:'vCICMSPRODUTOEMPRESAID'},{av:'AV7cSituacaoTributariaTipo',fld:'vCSITUACAOTRIBUTARIATIPO'},{av:'AV8cSituacaoTributariaCodigo',fld:'vCSITUACAOTRIBUTARIACODIGO'},{av:'AV9cICMSProdutoSequencia',fld:'vCICMSPRODUTOSEQUENCIA'},{av:'AV10cICMSProdutoUFDestino',fld:'vCICMSPRODUTOUFDESTINO'},{av:'AV11cICMSProdutoCategoria',fld:'vCICMSPRODUTOCATEGORIA'},{av:'AV12cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cICMSProdutoEmpresaId',fld:'vCICMSPRODUTOEMPRESAID'},{av:'AV7cSituacaoTributariaTipo',fld:'vCSITUACAOTRIBUTARIATIPO'},{av:'AV8cSituacaoTributariaCodigo',fld:'vCSITUACAOTRIBUTARIACODIGO'},{av:'AV9cICMSProdutoSequencia',fld:'vCICMSPRODUTOSEQUENCIA'},{av:'AV10cICMSProdutoUFDestino',fld:'vCICMSPRODUTOUFDESTINO'},{av:'AV11cICMSProdutoCategoria',fld:'vCICMSPRODUTOCATEGORIA'},{av:'AV12cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cICMSProdutoEmpresaId',fld:'vCICMSPRODUTOEMPRESAID'},{av:'AV7cSituacaoTributariaTipo',fld:'vCSITUACAOTRIBUTARIATIPO'},{av:'AV8cSituacaoTributariaCodigo',fld:'vCSITUACAOTRIBUTARIACODIGO'},{av:'AV9cICMSProdutoSequencia',fld:'vCICMSPRODUTOSEQUENCIA'},{av:'AV10cICMSProdutoUFDestino',fld:'vCICMSPRODUTOUFDESTINO'},{av:'AV11cICMSProdutoCategoria',fld:'vCICMSPRODUTOCATEGORIA'},{av:'AV12cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cICMSProdutoEmpresaId',fld:'vCICMSPRODUTOEMPRESAID'},{av:'AV7cSituacaoTributariaTipo',fld:'vCSITUACAOTRIBUTARIATIPO'},{av:'AV8cSituacaoTributariaCodigo',fld:'vCSITUACAOTRIBUTARIACODIGO'},{av:'AV9cICMSProdutoSequencia',fld:'vCICMSPRODUTOSEQUENCIA'},{av:'AV10cICMSProdutoUFDestino',fld:'vCICMSPRODUTOUFDESTINO'},{av:'AV11cICMSProdutoCategoria',fld:'vCICMSPRODUTOCATEGORIA'},{av:'AV12cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'}],[]];
   this.setVCMap("AV13pICMSProdutoEmpresaId", "vPICMSPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pSituacaoTributariaTipo", "vPSITUACAOTRIBUTARIATIPO", 0, "char");
   this.setVCMap("AV15pSituacaoTributariaCodigo", "vPSITUACAOTRIBUTARIACODIGO", 0, "char");
   this.setVCMap("AV16pICMSProdutoSequencia", "vPICMSPRODUTOSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0in0());
