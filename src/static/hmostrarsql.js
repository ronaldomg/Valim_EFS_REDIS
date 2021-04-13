/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:56:52.58
*/
gx.evt.autoSkip = false;
gx.define('hmostrarsql', false, function () {
   this.ServerClass =  "hmostrarsql" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV5FromJoinWhere=gx.fn.getControlValue("vFROMJOINWHERE") ;
      this.AV19tamanhoFrom=gx.fn.getIntegerValue("vTAMANHOFROM",'.') ;
      this.AV17ArquivoSql=gx.fn.getControlValue("vARQUIVOSQL") ;
      this.AV21Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.s112_client=function()
   {
      this.AV16SQLAux =  gx.text.lower( this.AV10SQL)  ;
      this.AV16SQLAux =  gx.text.replaceAll( this.AV16SQLAux, gx.text.chr( 10), " ")  ;
      this.AV16SQLAux =  gx.text.replaceAll( this.AV16SQLAux, gx.text.chr( 13), " ")  ;
      if ( gx.text.indexOf( this.AV16SQLAux, "update ", 1) > 0 )
      {
         this.addMessage("Comando \"Update\" inválido");
         this.AV9SnErro =  "S"  ;
      }
      else
      {
         if ( gx.text.indexOf( this.AV16SQLAux, "delete ", 1) > 0 )
         {
            this.addMessage("Comando \"Delete\" inválido");
            this.AV9SnErro =  "S"  ;
         }
         else
         {
            if ( gx.text.indexOf( this.AV16SQLAux, "insert ", 1) > 0 )
            {
               this.addMessage("Comando \"Insert\" inválido");
               this.AV9SnErro =  "S"  ;
            }
         }
      }
      if ( gx.text.indexOf( this.AV16SQLAux, "drop ", 1) > 0 && this.AV9SnErro == "N" )
      {
         this.addMessage("Comando \"Drop\" inválido");
         this.AV9SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV16SQLAux, "select ", 1) == 0 && this.AV9SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV9SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV16SQLAux, "create ", 1) > 0 && this.AV9SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV9SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV16SQLAux, "alter ", 1) > 0 && this.AV9SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV9SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV16SQLAux, "truncate ", 1) > 0 && this.AV9SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV9SnErro =  "S"  ;
      }
   };
   this.e1220e2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1320e2_client=function()
   {
      this.executeServerEvent("'SALVARSQL'", false, null, false, false);
   };
   this.e1420e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1720e2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,16];
   this.GXLastCtrlId =16;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSQL",gxz:"ZV10SQL",gxold:"OV10SQL",gxvar:"AV10SQL",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10SQL=Value},v2z:function(Value){gx.O.ZV10SQL=Value},v2c:function(){gx.fn.setControlValue("vSQL",gx.O.AV10SQL,0)},c2v:function(){gx.O.AV10SQL=this.val()},val:function(){return gx.fn.getControlValue("vSQL")},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNERRO",gxz:"ZV9SnErro",gxold:"OV9SnErro",gxvar:"AV9SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9SnErro=Value},v2z:function(Value){gx.O.ZV9SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV9SnErro,0)},c2v:function(){gx.O.AV9SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   this.AV10SQL = "" ;
   this.ZV10SQL = "" ;
   this.OV10SQL = "" ;
   this.AV9SnErro = "" ;
   this.ZV9SnErro = "" ;
   this.OV9SnErro = "" ;
   this.AV10SQL = "" ;
   this.AV9SnErro = "" ;
   this.AV5FromJoinWhere = "" ;
   this.AV19tamanhoFrom = 0 ;
   this.AV17ArquivoSql = "" ;
   this.AV21Modo = "" ;
   this.AV16SQLAux = "" ;
   this.Events = {"e1220e2_client": ["ENTER", true] ,"e1320e2_client": ["'SALVARSQL'", true] ,"e1420e2_client": ["'FECHAR'", true] ,"e1720e2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV21Modo',fld:'vMODO'},{av:'AV17ArquivoSql',fld:'vARQUIVOSQL'},{av:'AV19tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV5FromJoinWhere',fld:'vFROMJOINWHERE',hsh:true}],[{av:'AV22SnSalvo',fld:'vSNSALVO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV10SQL',fld:'vSQL'},{av:'AV21Modo',fld:'vMODO'},{av:'AV17ArquivoSql',fld:'vARQUIVOSQL'},{av:'AV19tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV5FromJoinWhere',fld:'vFROMJOINWHERE',hsh:true},{av:'AV9SnErro',fld:'vSNERRO'}],[{av:'AV9SnErro',fld:'vSNERRO'},{av:'AV16SQLAux',fld:'vSQLAUX'}]];
   this.EvtParms["'SALVARSQL'"] = [[{av:'AV9SnErro',fld:'vSNERRO'},{av:'AV10SQL',fld:'vSQL'},{av:'AV13NomeFile',fld:'vNOMEFILE'}],[{av:'AV10SQL',fld:'vSQL'},{av:'AV13NomeFile',fld:'vNOMEFILE'},{av:'AV16SQLAux',fld:'vSQLAUX'},{av:'AV9SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21Modo',fld:'vMODO'},{av:'AV17ArquivoSql',fld:'vARQUIVOSQL'},{av:'AV19tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV5FromJoinWhere',fld:'vFROMJOINWHERE',hsh:true}],[]];
   this.EnterCtrl = ["BTNFECHAR"];
   this.setVCMap("AV5FromJoinWhere", "vFROMJOINWHERE", 0, "svchar");
   this.setVCMap("AV19tamanhoFrom", "vTAMANHOFROM", 0, "int");
   this.setVCMap("AV17ArquivoSql", "vARQUIVOSQL", 0, "svchar");
   this.setVCMap("AV21Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmostrarsql());
